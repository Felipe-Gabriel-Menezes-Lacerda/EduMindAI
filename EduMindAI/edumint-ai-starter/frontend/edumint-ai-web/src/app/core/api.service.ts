import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CriarGincanaRequest, DashboardAluno, DashboardProfessor, Gincana, GincanaPreview, MissaoAluno, QuestaoDiagnostico, RankingItem, RespostaMissao, RespostaMissaoResultado, ResultadoDiagnostico, TrilhaAprendizagem, TrilhaRequest } from './models';
import { alunoDashboardMock, criarPreviewGincanaMock, criarTrilhaMock, missaoAlunoMock, professorDashboardMock, questoesDiagnosticoMock, rankingMock, resultadoDiagnosticoMock } from './mock-data';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly api = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  obterDashboardAluno(alunoId = 'aluno_001'): Observable<DashboardAluno> {
    return this.http.get<DashboardAluno>(`${this.api}/dashboard/aluno/${alunoId}`).pipe(catchError(() => of(alunoDashboardMock)));
  }

  obterDashboardProfessor(turmaId = 'turma_6A'): Observable<DashboardProfessor> {
    return this.http.get<DashboardProfessor>(`${this.api}/dashboard/turma/${turmaId}`).pipe(catchError(() => of(professorDashboardMock)));
  }

  obterQuestoesDiagnostico(): Observable<QuestaoDiagnostico[]> {
    return this.http.get<QuestaoDiagnostico[]>(`${this.api}/diagnosticos/questoes`).pipe(catchError(() => of(questoesDiagnosticoMock)));
  }

  responderDiagnostico(payload: { alunoId: string; turmaId: string; respostas: { questaoId: string; resposta: string }[]; }): Observable<ResultadoDiagnostico> {
    return this.http.post<ResultadoDiagnostico>(`${this.api}/diagnosticos/responder`, payload).pipe(catchError(() => of(resultadoDiagnosticoMock)));
  }

  gerarTrilha(payload: TrilhaRequest): Observable<TrilhaAprendizagem> {
    return this.http.post<TrilhaAprendizagem>(`${this.api}/trilhas/gerar`, payload).pipe(catchError(() => of(criarTrilhaMock(payload))));
  }

  gerarGincanaPreview(payload: CriarGincanaRequest): Observable<GincanaPreview> {
    return this.http.post<GincanaPreview>(`${this.api}/gincanas/gerar-preview`, payload).pipe(catchError(() => of(criarPreviewGincanaMock(payload))));
  }

  publicarGincana(payload: CriarGincanaRequest): Observable<Gincana> {
    return this.http.post<Gincana>(`${this.api}/gincanas/publicar`, payload).pipe(catchError(() => of({ ...criarPreviewGincanaMock(payload).gincana, status: 'publicada' })));
  }

  obterMissaoAluno(gincanaId = 'gincana_demo_001', alunoId = 'aluno_001'): Observable<MissaoAluno> {
    return this.http.get<MissaoAluno>(`${this.api}/missoes/${gincanaId}/aluno/${alunoId}`).pipe(catchError(() => of(missaoAlunoMock)));
  }

  obterRanking(gincanaId = 'gincana_demo_001'): Observable<RankingItem[]> {
    return this.http.get<RankingItem[]>(`${this.api}/rankings/${gincanaId}`).pipe(catchError(() => of(rankingMock)));
  }

  responderMissao(payload: RespostaMissao): Observable<RespostaMissaoResultado> {
    const fallback: RespostaMissaoResultado = {
      correta: payload.alternativa === 'D',
      pontosGanhos: payload.alternativa === 'D' ? 50 : 0,
      progressoAtual: payload.alternativa === 'D' ? 70 : 60,
      feedback: payload.alternativa === 'D' ? 'Boa! Voce identificou corretamente a fracao pintada e ganhou 50 pontos.' : 'Quase la! Conte novamente as partes pintadas e tente mais uma vez.'
    };
    return this.http.post<RespostaMissaoResultado>(`${this.api}/missoes/responder`, payload).pipe(catchError(() => of(fallback)));
  }

  perguntarTutor(pergunta: string): Observable<{ resposta: string }> {
    return this.http.post<{ resposta: string }>(`${this.api}/tutor/perguntar`, { alunoId: 'aluno_001', pergunta, contexto: 'Apoio em diagnostico, trilha e missoes do EduMint AI.' })
      .pipe(catchError(() => of({ resposta: 'Eu sugiro comecar pelos exemplos guiados, depois praticar com desafios curtos e revisar a parte em que voce mais errou.' })));
  }
}
