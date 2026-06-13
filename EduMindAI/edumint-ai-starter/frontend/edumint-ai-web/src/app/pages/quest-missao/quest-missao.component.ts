import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { MissaoAluno, NavItem } from '../../core/models';
import { missaoAlunoMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';

@Component({
  selector: 'app-quest-missao',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, ProgressBarComponent],
  templateUrl: './quest-missao.component.html',
  styleUrl: './quest-missao.component.scss'
})
export class QuestMissaoComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/aluno/dashboard', icon: 'IN' },
    { key: 'trilhas', label: 'Trilhas', route: '/aluno/trilha', icon: 'TR' },
    { key: 'quest', label: 'EduMint Quest', route: '/aluno/quest/missao', icon: 'EQ' },
    { key: 'relatorios', label: 'Relatórios', route: '/aluno/relatorios', icon: 'RL' },
    { key: 'conquistas', label: 'Conquistas', route: '/aluno/conquistas', icon: 'CQ' },
    { key: 'biblioteca', label: 'Biblioteca', route: '/aluno/biblioteca', icon: 'BB' },
    { key: 'tutor', label: 'IA Tutor', route: '/aluno/tutor', icon: 'AI' },
    { key: 'desafios', label: 'Desafios diários', route: '/aluno/desafios', icon: 'DD' }
  ];

  missao: MissaoAluno = missaoAlunoMock;
  alternativaSelecionada = '';
  feedback = '';

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.api.obterMissaoAluno().subscribe((missao) => (this.missao = missao));
  }

  responder(): void {
    if (!this.alternativaSelecionada) { return; }
    this.api.responderMissao({ alunoId: 'aluno_001', gincanaId: this.missao.gincanaId, missaoId: this.missao.desafioAtual.missaoId, alternativa: this.alternativaSelecionada }).subscribe((resultado) => {
      this.feedback = resultado.feedback;
      this.missao = { ...this.missao, progresso: resultado.progressoAtual, pontosAtuais: this.missao.pontosAtuais + resultado.pontosGanhos };
    });
  }
}
