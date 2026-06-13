import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { DashboardAluno, NavItem } from '../../core/models';
import { alunoDashboardMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';

@Component({
  selector: 'app-aluno-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, LayoutComponent, BadgeComponent, CardComponent, ProgressBarComponent, StatCardComponent],
  templateUrl: './aluno-dashboard.component.html',
  styleUrl: './aluno-dashboard.component.scss'
})
export class AlunoDashboardComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/aluno/dashboard', icon: 'IN' },
    { key: 'diagnostico', label: 'Diagnóstico', route: '/aluno/diagnostico', icon: 'DG' },
    { key: 'trilhas', label: 'Trilhas', route: '/aluno/trilha', icon: 'TR' },
    { key: 'missoes', label: 'Missões', route: '/aluno/quest/missao', icon: 'MS' },
    { key: 'conquistas', label: 'Conquistas', route: '/aluno/quest/missao', icon: 'CQ' },
    { key: 'relatorios', label: 'Relatórios', route: '/aluno/dashboard', icon: 'RL' },
    { key: 'ranking', label: 'Ranking', route: '/aluno/quest/missao', icon: 'RK' },
    { key: 'configuracoes', label: 'Configurações', route: '/aluno/dashboard', icon: 'CF' }
  ];

  dashboard: DashboardAluno = alunoDashboardMock;

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.api.obterDashboardAluno().subscribe((dashboard) => (this.dashboard = dashboard));
  }

  toneForSkill(percentual: number): 'mint' | 'red' | 'amber' {
    if (percentual < 50) { return 'red'; }
    if (percentual < 70) { return 'amber'; }
    return 'mint';
  }
}
