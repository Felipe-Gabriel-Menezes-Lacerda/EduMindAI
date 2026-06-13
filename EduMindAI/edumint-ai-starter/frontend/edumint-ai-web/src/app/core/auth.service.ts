import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthSession, LoginRequest, LoginResponse } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = environment.apiUrl;
  private readonly storageKey = 'edumint.ai.session';
  private readonly firebaseAuth;

  constructor(private readonly http: HttpClient) {
    // Inicializa o Firebase usando as credenciais do seu environment.ts
    const app = initializeApp(environment.firebase);
    this.firebaseAuth = getAuth(app);
  }

  // Mantive o nome 'login' para você NÃO precisar alterar o resto dos componentes do Hackathon!
  login(payload: LoginRequest): Observable<AuthSession> {
    // 1. Faz login no Firebase Web SDK usando o e-mail e senha digitados
    return from(signInWithEmailAndPassword(this.firebaseAuth, payload.email, payload.senha)).pipe(
      switchMap((userCredential: UserCredential) => {
        // 2. Recupera o Token JWT do Firebase
        return from(userCredential.user.getIdToken());
      }),
      switchMap((idToken: string) => {
        // 3. Envia o token para o seu Backend .NET validar
        // Passamos também o perfil para o backend saber se é aluno ou professor, se necessário
        return this.http.post<LoginResponse>(
          `${this.api}/api/auth/validar-token`, 
          { idToken: idToken, perfil: payload.perfil },
          { withCredentials: true } // Permite que o navegador salve o cookie do .NET
        );
      }),
      map((response) => {
        // Garante que o redirectUrl está preenchido antes de salvar a sessão
        if (!response.redirectUrl) {
          response.redirectUrl = this.getRedirectUrl(payload.perfil);
        }
        return this.persistSession(response);
      }),
      catchError((error: any) => {
        // Se a API .NET estiver offline (status 0) ou der erro de rede, ativa o modo de demonstração offline
        if (error.status === 0) {
          return of(this.persistSession(this.criarRespostaOffline(payload)));
        }
        return throwError(() => error);
      })
    );
  }

  // Novo método específico para o seu LoginComponent chamar diretamente se preferir
  loginNoFirebaseEValidarNoBackend(email: string, senha: string): Observable<any> {
    return this.login({ email, senha, perfil: 'aluno' }).pipe(
      map(session => ({ success: true, redirectUrl: session.redirectUrl }))
    );
  }

  entrarDemoAluno(): Observable<AuthSession> {
    return this.login({
      email: 'ana@email.com',
      senha: '123456',
      perfil: 'aluno'
    });
  }

  getSession(): AuthSession | null {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as AuthSession;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getSession()?.token;
  }

  // Atualizado para deslogar do Firebase e avisar o Backend .NET
  logout(): Observable<any> {
    localStorage.removeItem(this.storageKey);
    
    return from(signOut(this.firebaseAuth)).pipe(
      switchMap(() => {
        return this.http.post(`${this.api}/api/auth/logout`, {}, { withCredentials: true });
      }),
      catchError(() => {
        // Se a API falhar no logout, resolve localmente para não travar a UI
        return of({ success: true });
      })
    );
  }

  getRedirectUrl(perfil: 'aluno' | 'professor'): string {
    return perfil === 'professor' ? '/professor/dashboard' : '/aluno/dashboard';
  }

  private persistSession(response: LoginResponse): AuthSession {
    localStorage.setItem(this.storageKey, JSON.stringify(response));
    return response;
  }

  private criarRespostaOffline(payload: LoginRequest): LoginResponse {
    const isProfessor = payload.perfil === 'professor';

    return {
      token: `offline-${payload.perfil}`,
      redirectUrl: this.getRedirectUrl(payload.perfil),
      authenticatedWithFirebase: false,
      usuario: {
        id: isProfessor ? 'prof_001' : 'aluno_001',
        nome: isProfessor ? 'Prof. Ana Clara' : 'Ana Souza',
        email: payload.email || (isProfessor ? 'prof@edumint.ai' : 'ana@email.com'),
        perfil: payload.perfil,
        turmaId: isProfessor ? null : 'turma_6A'
      }
    };
  }
}