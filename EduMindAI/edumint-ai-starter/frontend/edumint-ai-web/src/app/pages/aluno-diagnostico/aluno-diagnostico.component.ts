import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { NavItem, QuestaoDiagnostico, ResultadoDiagnostico } from '../../core/models';
import { questoesDiagnosticoMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state/empty-state.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';

@Component({
  selector: 'app-aluno-diagnostico',
  standalone: true,
  imports: [CommonModule, LayoutComponent, BadgeComponent, CardComponent, EmptyStateComponent, ProgressBarComponent],
  templateUrl: './aluno-diagnostico.component.html',
  styleUrl: './aluno-diagnostico.component.scss'
})
export class AlunoDiagnosticoComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/aluno/dashboard', icon: 'IN' },
    { key: 'diagnostico', label: 'Diagnóstico', route: '/aluno/diagnostico', icon: 'DG' },
    { key: 'trilhas', label: 'Trilhas', route: '/aluno/trilha', icon: 'TR' },
    { key: 'missoes', label: 'Missões', route: '/aluno/quest/missao', icon: 'MS' },
    { key: 'conquistas', label: 'Conquistas', route: '/aluno/quest/missao', icon: 'CQ' }
  ];

  questoes: QuestaoDiagnostico[] = questoesDiagnosticoMock;
  respostas: Record<string, string> = {};
  resultado?: ResultadoDiagnostico;
  enviando = false;

  constructor(private readonly api: ApiService, private readonly router: Router) {}

  ngOnInit(): void {
    this.api.obterQuestoesDiagnostico().subscribe((questoes) => (this.questoes = questoes));
    const salvo = localStorage.getItem('edumint-diagnostico');
    if (salvo) { this.resultado = JSON.parse(salvo) as ResultadoDiagnostico; }
  }

  selecionarResposta(questaoId: string, alternativa: string): void { this.respostas[questaoId] = alternativa; }

  enviar(): void {
    this.enviando = true;
    const respostas = Object.entries(this.respostas).map(([questaoId, resposta]) => ({ questaoId, resposta }));
    this.api.responderDiagnostico({ alunoId: 'aluno_001', turmaId: 'turma_6A', respostas }).subscribe((resultado) => {
      this.resultado = resultado;
      localStorage.setItem('edumint-diagnostico', JSON.stringify(resultado));
      this.enviando = false;
    });
  }

  continuarTrilha(): void { if (this.resultado) { this.router.navigateByUrl('/aluno/trilha'); } }
}
