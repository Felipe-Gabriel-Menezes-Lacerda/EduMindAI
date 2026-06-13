import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';
import { NavItem } from '../../core/models';

@Component({
  selector: 'app-aluno-relatorios',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, BadgeComponent, ProgressBarComponent, StatCardComponent],
  template: `
    <app-layout [items]="menuItems" activeKey="relatorios" sidebarTone="light" topbarTone="light" userName="Ana Souza" userRole="Aluno" initials="AS" footerTitle="Resumo semanal" footerSubtitle="Seu progresso está acima da média da turma" footerIcon="RL">
      <div class="app-page">
        <section class="hero surface">
          <div>
            <span class="kicker">Relatórios inteligentes</span>
            <h1>Veja onde a aprendizagem avançou e onde a turma precisa de reforço.</h1>
            <p>O painel organiza o desempenho em leitura, matemática e participação, com foco no que o aluno pode fazer agora.</p>
          </div>
          <div class="hero-card">
            <strong>Leitura do período</strong>
            <p>O desempenho médio subiu, mas divisão e interpretação ainda pedem revisão guiada.</p>
            <app-badge text="Atualizado hoje" tone="info"></app-badge>
          </div>
        </section>

        <section class="stats-grid">
          <app-stat-card *ngFor="let stat of stats" [title]="stat.title" [value]="stat.value" [detail]="stat.detail" [icon]="stat.icon" [tone]="stat.tone" [progress]="stat.progress"></app-stat-card>
        </section>

        <div class="content-grid">
          <app-card title="Desempenho por habilidade" subtitle="Acompanhe as áreas mais fortes e os pontos que precisam de apoio.">
            <div class="ability-grid">
              <article class="ability-card" *ngFor="let area of areas">
                <div class="ability-head">
                  <div class="icon-bubble">{{ area.icon }}</div>
                  <div>
                    <strong>{{ area.title }}</strong>
                    <p>{{ area.summary }}</p>
                  </div>
                </div>
                <app-progress-bar [value]="area.value" [tone]="area.value < 50 ? 'red' : area.value < 70 ? 'amber' : 'mint'"></app-progress-bar>
                <div class="ability-meta"><span>{{ area.value }}%</span><small>{{ area.detail }}</small></div>
              </article>
            </div>
          </app-card>

          <div class="side-column">
            <app-card title="Insights da IA" [compact]="true">
              <div class="insight-list">
                <div *ngFor="let insight of insights" class="insight-item">
                  <strong>{{ insight.title }}</strong>
                  <p>{{ insight.text }}</p>
                </div>
              </div>
            </app-card>

            <app-card title="Ações recomendadas" [compact]="true">
              <ul class="action-list">
                <li *ngFor="let action of actions">{{ action }}</li>
              </ul>
            </app-card>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    h1 { font-size: clamp(2rem, 3vw, 3.2rem); margin: 10px 0 12px; line-height: 1.05; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 18px; padding: 28px; background: linear-gradient(135deg, #f4fff9 0%, #edf4ff 100%); }
    .hero p { color: var(--text-700); max-width: 62ch; }
    .hero-card { display: grid; gap: 10px; padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.84); border: 1px solid rgba(14,168,111,0.14); box-shadow: var(--shadow-md); align-content: start; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
    .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 22px; }
    .ability-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .ability-card { display: grid; gap: 14px; padding: 20px; border-radius: 18px; border: 1px solid var(--line); background: linear-gradient(180deg, #fff 0%, #f7fbff 100%); }
    .ability-head { display: flex; gap: 12px; align-items: flex-start; }
    .ability-head p, .insight-item p, .action-list { color: var(--text-500); }
    .ability-meta { display: flex; justify-content: space-between; align-items: center; gap: 12px; color: var(--text-700); font-weight: 700; }
    .side-column { display: grid; gap: 22px; align-content: start; }
    .insight-list { display: grid; gap: 14px; }
    .insight-item { padding-bottom: 14px; border-bottom: 1px solid var(--line); }
    .insight-item:last-child { border-bottom: 0; padding-bottom: 0; }
    .action-list { margin: 0; padding-left: 18px; display: grid; gap: 10px; }
    @media (max-width: 1280px) { .hero, .content-grid, .stats-grid, .ability-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 980px) { .hero, .content-grid, .stats-grid, .ability-grid { grid-template-columns: 1fr; } }
  `]
})
export class AlunoRelatoriosComponent {
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

  readonly stats = [
    { title: 'Média geral', value: '68%', detail: 'subiu 8 pontos na semana', icon: 'MG', tone: 'mint' as const, progress: 68 },
    { title: 'Habilidades críticas', value: '2', detail: 'Divisão e interpretação', icon: 'HC', tone: 'amber' as const, progress: 42 },
    { title: 'Entrega de atividades', value: '91%', detail: 'quase todas as missões feitas', icon: 'AT', tone: 'blue' as const, progress: 91 },
    { title: 'Sequência ativa', value: '7 dias', detail: 'consistência mantida', icon: 'ST', tone: 'purple' as const, progress: 77 }
  ];

  readonly areas = [
    { icon: 'LE', title: 'Leitura e interpretação', value: 82, summary: 'Boa leitura de enunciados e entendimento do pedido.', detail: 'Pronto para desafios mais longos.' },
    { icon: 'DV', title: 'Divisão', value: 48, summary: 'Precisa de revisão com exemplos guiados e prática curta.', detail: 'Prioridade no próximo ciclo.' },
    { icon: 'FR', title: 'Frações', value: 76, summary: 'Base sólida para avançar em representação e comparação.', detail: 'Manter ritmo de reforço.' }
  ];

  readonly insights = [
    { title: 'Padrão identificado', text: 'O aluno evolui melhor quando começa com exemplo resolvido antes do exercício independente.' },
    { title: 'Ganho rápido', text: 'Microtarefas de 5 minutos aumentam a retenção e reduzem erros de cálculo.' },
    { title: 'Foco recomendado', text: 'A próxima trilha deve misturar leitura, divisão e feedback imediato.' }
  ];

  readonly actions = [
    'Revisar a habilidade de divisão com três exemplos práticos.',
    'Liberar um quiz curto após cada vídeo ou explicação.',
    'Usar o IA Tutor para explicar etapas que geram dúvida.'
  ];
}