import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { CriarGincanaRequest, GincanaPreview, NavItem } from '../../core/models';
import { criarPreviewGincanaMock } from '../../core/mock-data';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'app-quest-criar',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent, BadgeComponent, CardComponent],
  templateUrl: './quest-criar.component.html',
  styleUrl: './quest-criar.component.scss'
})
export class QuestCriarComponent implements OnInit {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/professor/dashboard', icon: 'IN' },
    { key: 'turmas', label: 'Turmas', route: '/professor/dashboard', icon: 'TM' },
    { key: 'conteudos', label: 'Conteúdos', route: '/professor/dashboard', icon: 'CT' },
    { key: 'trilhas', label: 'Trilhas', route: '/professor/dashboard', icon: 'TR' },
    { key: 'quest', label: 'Gincanas com IA', route: '/professor/quest/criar', icon: 'EQ' },
    { key: 'relatorios', label: 'Relatórios', route: '/professor/dashboard', icon: 'RL' },
    { key: 'banco', label: 'Banco de questões', route: '/professor/dashboard', icon: 'BQ' },
    { key: 'recursos', label: 'Recursos', route: '/professor/dashboard', icon: 'RC' }
  ];

  form: CriarGincanaRequest = { turmaId: '9A', professorId: 'prof_001', disciplina: 'História', conteudo: 'Revolução Francesa', habilidade: 'Analisar os impactos da Revolução Francesa na Europa e no mundo.', tema: 'Anime aventura', formato: 'equipes', duracaoDias: 7 };
  preview: GincanaPreview = criarPreviewGincanaMock(this.form);
  publicacaoMensagem = '';

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void { this.gerarPreview(); }

  gerarPreview(): void { this.api.gerarGincanaPreview(this.form).subscribe((preview) => (this.preview = preview)); }

  publicar(): void {
    this.api.publicarGincana(this.form).subscribe((gincana) => {
      this.preview = { ...this.preview, gincana };
      this.publicacaoMensagem = 'Gincana publicada com sucesso para a turma selecionada.';
    });
  }
}
