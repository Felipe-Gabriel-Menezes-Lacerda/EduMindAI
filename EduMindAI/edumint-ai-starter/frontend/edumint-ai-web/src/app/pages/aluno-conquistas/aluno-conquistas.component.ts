import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';
import { NavItem } from '../../core/models';

@Component({
  selector: 'app-aluno-conquistas',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, BadgeComponent, StatCardComponent],
  template: `
    <app-layout [items]="menuItems" activeKey="conquistas" sidebarTone="light" topbarTone="light" userName="Ana Souza" userRole="Aluno" initials="AS" footerTitle="Sequência de hoje" footerSubtitle="Mantenha o ritmo para destravar a próxima medalha" footerIcon="XP">
      <div class="app-page">
        <section class="hero surface">
          <div>
            <span class="kicker">Conquistas e progressão</span>
            <h1>Medalhas, sequências e marcos que mostram a sua evolução.</h1>
            <p>Este painel destaca o que já foi alcançado e o próximo passo para manter a motivação viva.</p>
          </div>
          <div class="hero-score">
            <strong>1.250 XP</strong>
            <p>Você está a 150 XP da próxima recompensa especial.</p>
            <app-badge text="Sequência de 7 dias" tone="success"></app-badge>
          </div>
        </section>

        <section class="stats-grid">
          <app-stat-card *ngFor="let stat of stats" [title]="stat.title" [value]="stat.value" [detail]="stat.detail" [icon]="stat.icon" [tone]="stat.tone"></app-stat-card>
        </section>

        <div class="content-grid">
          <app-card title="Medalhas desbloqueadas" subtitle="As conquistas mais recentes da jornada de aprendizagem.">
            <div class="medal-grid">
              <article class="medal-card" *ngFor="let medal of medals" [class.locked]="medal.status === 'bloqueada'">
                <div class="medal-icon">{{ medal.icon }}</div>
                <strong>{{ medal.title }}</strong>
                <p>{{ medal.description }}</p>
                <app-badge [text]="medal.statusLabel" [tone]="medal.status === 'conquistada' ? 'success' : medal.status === 'em-andamento' ? 'info' : 'warn'"></app-badge>
              </article>
            </div>
          </app-card>

          <div class="side-column">
            <app-card title="Próxima recompensa" [compact]="true">
              <div class="reward-box">
                <strong>Destravando a Insígnia Mestre dos Desafios</strong>
                <p>Complete mais duas missões da semana para ganhar pontos extras e liberar o selo de destaque no perfil.</p>
              </div>
            </app-card>

            <app-card title="Linha do tempo" [compact]="true">
              <ul class="timeline-list">
                <li *ngFor="let item of timeline">
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.detail }}</span>
                </li>
              </ul>
            </app-card>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    h1 { font-size: clamp(2rem, 3vw, 3.2rem); margin: 10px 0 12px; line-height: 1.05; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 18px; padding: 28px; background: linear-gradient(135deg, #fffaf0 0%, #eef7ff 100%); }
    .hero p { color: var(--text-700); max-width: 60ch; }
    .hero-score { display: grid; gap: 10px; padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.9); border: 1px solid rgba(245,182,61,0.2); box-shadow: var(--shadow-md); }
    .hero-score strong { font-size: 2rem; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
    .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 22px; }
    .side-column { display: grid; gap: 22px; align-content: start; }
    .medal-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .medal-card { display: grid; gap: 12px; padding: 20px; border-radius: 18px; border: 1px solid var(--line); background: linear-gradient(180deg, #fff 0%, #f9fbff 100%); }
    .medal-card.locked { opacity: 0.58; }
    .medal-icon { width: 58px; height: 58px; border-radius: 18px; display: grid; place-items: center; background: #fff7df; color: #c48308; font-weight: 900; }
    .medal-card p, .reward-box p, .timeline-list span { color: var(--text-500); }
    .reward-box { display: grid; gap: 10px; }
    .timeline-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
    .timeline-list li { padding: 14px 0; border-bottom: 1px solid var(--line); display: grid; gap: 4px; }
    .timeline-list li:last-child { border-bottom: 0; padding-bottom: 0; }
    @media (max-width: 1280px) { .hero, .content-grid, .stats-grid, .medal-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 980px) { .hero, .content-grid, .stats-grid, .medal-grid { grid-template-columns: 1fr; } }
  `]
})
export class AlunoConquistasComponent {
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
    { title: 'XP total', value: '1.250', detail: '120 ganhos nesta semana', icon: 'XP', tone: 'purple' as const },
    { title: 'Medalhas', value: '4', detail: '3 já conquistadas', icon: 'MD', tone: 'amber' as const },
    { title: 'Sequência ativa', value: '7 dias', detail: 'sem perder o ritmo', icon: 'ST', tone: 'mint' as const },
    { title: 'Missões feitas', value: '12', detail: 'de 20 planejadas', icon: 'MS', tone: 'blue' as const }
  ];

  readonly medals = [
    { icon: 'EX', title: 'Explorador', description: 'Concluiu 10 missões com consistência.', status: 'conquistada', statusLabel: 'Conquistada' },
    { icon: 'RA', title: 'Raciocínio', description: 'Acertou 25 desafios seguidos em atividades curtas.', status: 'conquistada', statusLabel: 'Conquistada' },
    { icon: 'SE', title: 'Sequência', description: 'Manteve 7 dias de estudo consecutivos.', status: 'conquistada', statusLabel: 'Conquistada' },
    { icon: 'MF', title: 'Mestre das Frações', description: 'Em andamento para a próxima prova de progresso.', status: 'em-andamento', statusLabel: 'Em andamento' },
    { icon: 'DD', title: 'Desafiante Diário', description: 'Resolva 5 desafios diários para liberar esta medalha.', status: 'em-andamento', statusLabel: 'Em andamento' },
    { icon: 'TR', title: 'Troféu da Trilha', description: 'Complete uma trilha inteira sem pausas longas.', status: 'bloqueada', statusLabel: 'Bloqueada' }
  ];

  readonly timeline = [
    { title: 'Hoje', detail: 'Conclusão da missão diária desbloqueia +40 XP.' },
    { title: 'Amanhã', detail: 'Nova leitura guiada libera bônus de sequência.' },
    { title: 'Final da semana', detail: 'Meta de 1.500 XP habilita medalha especial.' }
  ];
}