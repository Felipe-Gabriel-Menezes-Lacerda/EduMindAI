import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { NavItem } from '../../core/models';

@Component({
  selector: 'app-aluno-biblioteca',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, BadgeComponent],
  template: `
    <app-layout [items]="menuItems" activeKey="biblioteca" sidebarTone="light" topbarTone="light" userName="Ana Souza" userRole="Aluno" initials="AS" footerTitle="Leituras sugeridas" footerSubtitle="O catálogo muda de acordo com a trilha do aluno" footerIcon="BB">
      <div class="app-page">
        <section class="hero surface">
          <div>
            <span class="kicker">Biblioteca de apoio</span>
            <h1>Conteúdos, guias e exemplos para estudar com mais segurança.</h1>
            <p>A biblioteca organiza materiais curtos e objetivos, com foco nas habilidades que aparecem no diagnóstico e nas missões.</p>
          </div>
          <div class="hero-box">
            <strong>Catálogo curado pela IA</strong>
            <p>Os recursos abaixo simulam a experiência de recomendação do projeto e já conectam leitura com prática.</p>
          </div>
        </section>

        <div class="content-grid">
          <app-card title="Recursos em destaque" subtitle="Materiais para rever antes de começar uma missão ou trilha.">
            <div class="resource-grid">
              <article class="resource-card" *ngFor="let resource of resources">
                <div class="resource-top">
                  <div class="icon-bubble">{{ resource.icon }}</div>
                  <app-badge [text]="resource.category" [tone]="resource.tone"></app-badge>
                </div>
                <strong>{{ resource.title }}</strong>
                <p>{{ resource.summary }}</p>
                <div class="resource-meta"><span>{{ resource.duration }}</span><span>{{ resource.level }}</span></div>
                <div class="tag-row"><span *ngFor="let tag of resource.tags">{{ tag }}</span></div>
              </article>
            </div>
          </app-card>

          <div class="side-column">
            <app-card title="Trilhas rápidas" [compact]="true">
              <ul class="quick-list">
                <li *ngFor="let item of quickPaths">
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.detail }}</span>
                </li>
              </ul>
            </app-card>

            <app-card title="Tempo de leitura" [compact]="true">
              <div class="reading-time">
                <strong>18 minutos</strong>
                <p>É o tempo médio para revisar os recursos sugeridos hoje.</p>
              </div>
            </app-card>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    h1 { font-size: clamp(2rem, 3vw, 3.2rem); margin: 10px 0 12px; line-height: 1.05; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 18px; padding: 28px; background: linear-gradient(135deg, #f4f8ff 0%, #f3fff7 100%); }
    .hero p { color: var(--text-700); max-width: 60ch; }
    .hero-box { display: grid; gap: 10px; padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.88); border: 1px solid rgba(43,110,231,0.14); box-shadow: var(--shadow-md); }
    .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 22px; }
    .side-column { display: grid; gap: 22px; align-content: start; }
    .resource-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .resource-card { display: grid; gap: 14px; padding: 20px; border-radius: 18px; border: 1px solid var(--line); background: linear-gradient(180deg, #fff 0%, #f9fbff 100%); }
    .resource-top { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; }
    .resource-card p, .quick-list span, .reading-time p { color: var(--text-500); }
    .resource-meta { display: flex; justify-content: space-between; gap: 12px; color: var(--text-700); font-weight: 700; }
    .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag-row span { padding: 7px 10px; border-radius: 999px; background: #eef5ff; color: #356fe9; font-size: 0.78rem; font-weight: 800; }
    .quick-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
    .quick-list li { padding-bottom: 12px; border-bottom: 1px solid var(--line); display: grid; gap: 4px; }
    .quick-list li:last-child { border-bottom: 0; padding-bottom: 0; }
    .reading-time strong { font-size: 2rem; display: block; margin-bottom: 8px; }
    @media (max-width: 1280px) { .hero, .content-grid, .resource-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 980px) { .hero, .content-grid, .resource-grid { grid-template-columns: 1fr; } }
  `]
})
export class AlunoBibliotecaComponent {
  readonly menuItems: NavItem[] = [
    { key: 'inicio', label: 'Início', route: '/aluno/dashboard', icon: 'IN' },
    { key: 'diagnostico', label: 'Diagnóstico', route: '/aluno/diagnostico', icon: 'DG' },
    { key: 'trilhas', label: 'Trilhas', route: '/aluno/trilha', icon: 'TR' },
    { key: 'relatorios', label: 'Relatórios', route: '/aluno/relatorios', icon: 'RL' },
    { key: 'conquistas', label: 'Conquistas', route: '/aluno/conquistas', icon: 'CQ' },
    { key: 'biblioteca', label: 'Biblioteca', route: '/aluno/biblioteca', icon: 'BB' },
    { key: 'tutor', label: 'IA Tutor', route: '/aluno/tutor', icon: 'AI' },
    { key: 'desafios', label: 'Desafios diários', route: '/aluno/desafios', icon: 'DD' }
  ];

  readonly resources = [
    { icon: 'LE', category: 'Leitura', tone: 'info' as const, title: 'Como entender enunciados', summary: 'Guia curto com dicas para localizar palavras-chave e interpretar o que o problema pede.', duration: '6 min', level: 'Básico', tags: ['texto', 'interpretação', 'dicas'] },
    { icon: 'DV', category: 'Matemática', tone: 'warn' as const, title: 'Divisão sem medo', summary: 'Explicação com exemplos práticos para dividir quantidades em partes iguais.', duration: '8 min', level: 'Revisão', tags: ['divisão', 'passo a passo', 'exercícios'] },
    { icon: 'FR', category: 'Frações', tone: 'success' as const, title: 'Frações no cotidiano', summary: 'Uso de frações em receitas, tempo e repartição de objetos do dia a dia.', duration: '5 min', level: 'Intermediário', tags: ['frações', 'contexto', 'visual'] }
  ];

  readonly quickPaths = [
    { title: 'Antes da missão', detail: 'Leia um resumo rápido e faça um desafio de aquecimento.' },
    { title: 'Após o diagnóstico', detail: 'Revise a habilidade crítica com mais precisão.' },
    { title: 'Para estudar em casa', detail: 'Use os materiais curtos para uma revisão leve e constante.' }
  ];
}