import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';
import { loginBeneficios } from '../../core/mock-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly beneficios = loginBeneficios;
  perfil: 'aluno' | 'professor' = 'aluno';
  email = 'ana@email.com';
  senha = '123456';
  carregando = false;
  erro = '';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  definirPerfil(perfil: 'aluno' | 'professor'): void {
    this.perfil = perfil;
    this.email = perfil === 'professor' ? 'prof@edumint.ai' : 'ana@email.com';
    this.senha = '123456';
    this.erro = '';
  }

entrar(): void {
    this.erro = '';
    this.carregando = true;

    // 1. Passamos o email e senha para o serviço tratar com o Firebase/Backend
    this.authService.loginNoFirebaseEValidarNoBackend(this.email, this.senha)
      .pipe(finalize(() => (this.carregando = false)))
      .subscribe({
        next: (res) => {
          if (res.success) {
            // 2. Se o .NET validou e criou o cookie, redireciona o usuário
            // Você pode decidir a rota com base no perfil que está selecionado na tela
            const rotaDestino = this.perfil === 'professor' ? '/professor/dashboard' : '/aluno/dashboard';
            this.router.navigateByUrl(rotaDestino);
          }
        },
        error: (error) => {
          // Captura os erros vindos do Firebase (ex: senha errada) ou do .NET
          this.erro = error.error?.message ?? 'Não foi possível entrar. Verifique suas credenciais.';
        }
      });
  }

  iniciarDiagnostico(): void {
    this.erro = '';
    this.carregando = true;

    this.authService.entrarDemoAluno()
      .pipe(finalize(() => (this.carregando = false)))
      .subscribe({
        next: () => this.router.navigateByUrl('/aluno/diagnostico'),
        error: () => {
          this.erro = 'Não foi possível iniciar o diagnóstico agora. Tente novamente em instantes.';
        }
      });
  }
}
