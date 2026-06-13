import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { NavItem, ResultadoDiagnostico, TrilhaAprendizagem } from '../../core/models';
import { criarTrilhaMock, resultadoDiagnosticoMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';

@Component({
  selector: 'app-aluno-trilha',
  standalone: true,
  imports: [CommonModule, LayoutComponent, BadgeComponent, CardComponent, ProgressBarComponent],
  templateUrl: './aluno-trilha.component.html',
  styleUrl: './aluno-trilha.component.scss'
})
export class AlunoTrilhaComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/aluno/dashboard', icon: 'IN' },
    { key: 'diagnostico', label: 'Diagnóstico', route: '/aluno/diagnostico', icon: 'DG' },
    { key: 'trilhas', label: 'Trilhas', route: '/aluno/trilha', icon: 'TR' },
    { key: 'missoes', label: 'Missões', route: '/aluno/quest/missao', icon: 'MS' },
    { key: 'conquistas', label: 'Conquistas', route: '/aluno/quest/missao', icon: 'CQ' }
  ];

  resultado: ResultadoDiagnostico = resultadoDiagnosticoMock;
  trilha = criarTrilhaMock({ alunoId: 'aluno_001', diagnosticoId: resultadoDiagnosticoMock.diagnosticoId, habilidadesCriticas: resultadoDiagnosticoMock.habilidadesCriticas, nivel: resultadoDiagnosticoMock.status });

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    const salvo = localStorage.getItem('edumint-diagnostico');
    if (salvo) { this.resultado = JSON.parse(salvo) as ResultadoDiagnostico; }
    this.api.gerarTrilha({ alunoId: 'aluno_001', diagnosticoId: this.resultado.diagnosticoId, habilidadesCriticas: this.resultado.habilidadesCriticas, nivel: this.resultado.status }).subscribe((trilha) => {
      this.trilha = trilha;
    });
  }
}
