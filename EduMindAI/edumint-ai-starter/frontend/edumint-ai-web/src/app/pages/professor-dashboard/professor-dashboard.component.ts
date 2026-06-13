import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { DashboardProfessor, NavItem } from '../../core/models';
import { professorDashboardMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';

@Component({
  selector: 'app-professor-dashboard',
  standalone: true,
  imports: [CommonModule, LayoutComponent, BadgeComponent, CardComponent, ProgressBarComponent, StatCardComponent],
  templateUrl: './professor-dashboard.component.html',
  styleUrl: './professor-dashboard.component.scss'
})
export class ProfessorDashboardComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'visao-geral', label: 'Visão geral', route: '/professor/dashboard', icon: 'VG' },
    { key: 'turmas', label: 'Turmas', route: '/professor/dashboard', icon: 'TM' },
    { key: 'diagnosticos', label: 'Diagnósticos', route: '/professor/dashboard', icon: 'DG' },
    { key: 'trilhas', label: 'Trilhas', route: '/professor/dashboard', icon: 'TR' },
    { key: 'quest', label: 'EduMint Quest', route: '/professor/quest/criar', icon: 'EQ' },
    { key: 'relatorios', label: 'Relatórios', route: '/professor/dashboard', icon: 'RL' }
  ];

  dashboard: DashboardProfessor = professorDashboardMock;

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.api.obterDashboardProfessor().subscribe((dashboard) => (this.dashboard = dashboard));
  }

  toneForValue(valor: number): 'red' | 'amber' | 'mint' {
    if (valor < 50) { return 'red'; }
    if (valor < 70) { return 'amber'; }
    return 'mint';
  }
}
