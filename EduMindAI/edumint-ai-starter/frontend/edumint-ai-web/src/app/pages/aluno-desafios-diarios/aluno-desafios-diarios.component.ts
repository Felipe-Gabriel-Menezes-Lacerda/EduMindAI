import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ProgressBarComponent } from '../../shared/ui/progress-bar/progress-bar.component';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';
import { NavItem } from '../../core/models';

@Component({
  selector: 'app-aluno-desafios-diarios',
  standalone: true,
  imports: [CommonModule, LayoutComponent, CardComponent, ProgressBarComponent, StatCardComponent],
  template: `
    <app-layout [items]="menuItems" activeKey="desafios" sidebarTone="light" topbarTone="light" userName="Ana Souza" userRole="Aluno" initials="AS" footerTitle="Missão diária" footerSubtitle="Entre agora e mantenha a sequência ativa" footerIcon="DD">
      <div class="app-page">
        <section class="hero surface">
          <div>
            <span class="kicker">Desafios diários</span>
            <h1>Pequenas metas para criar constância sem pesar na rotina.</h1>
            <p>As tarefas curtas ajudam a manter o ritmo, ganhar XP e reforçar pontos importantes antes das missões maiores.</p>
          </div>
          <div class="hero-box">
            <strong>Sequência atual</strong>
            <p>7 dias consecutivos. Falta pouco para a recompensa semanal.</p>
            <app-progress-bar [value]="70"></app-progress-bar>
          </div>
        </section>

        <section class="stats-grid">
          <app-stat-card *ngFor="let stat of stats" [title]="stat.title" [value]="stat.value" [detail]="stat.detail" [icon]="stat.icon" [tone]="stat.tone"></app-stat-card>
        </section>

        <div class="content-grid">
          <app-card title="Desafios do dia" subtitle="Cada missão leva poucos minutos e rende progresso visível.">
            <div class="challenge-grid">
              <article class="challenge-card" *ngFor="let challenge of challenges" [class.done]="challenge.done">
                <div class="challenge-top">
                  <div class="icon-bubble">{{ challenge.icon }}</div>
                  <strong>{{ challenge.title }}</strong>
                </div>
                <p>{{ challenge.description }}</p>
                <app-progress-bar [value]="challenge.progress" [tone]="challenge.progress < 50 ? 'amber' : 'mint'"></app-progress-bar>
                <div class="challenge-footer">
                  <span>{{ challenge.xp }} XP</span>
                  <button class="btn-secondary" type="button">{{ challenge.action }}</button>
                </div>
              </article>
            </div>
          </app-card>

          <div class="side-column">
            <app-card title="Calendário de consistência" [compact]="true">
              <div class="calendar-grid">
                <div *ngFor="let day of week" class="calendar-day" [class.active]="day.active">{{ day.label }}</div>
              </div>
            </app-card>

            <app-card title="Meta da semana" [compact]="true">
              <div class="weekly-box">
                <strong>4 desafios concluídos</strong>
                <p>Complete 3 tarefas a mais para liberar o bônus de 100 XP.</p>
              </div>
            </app-card>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    h1 { font-size: clamp(2rem, 3vw, 3.2rem); margin: 10px 0 12px; line-height: 1.05; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 18px; padding: 28px; background: linear-gradient(135deg, #f4fff9 0%, #f7f8ff 100%); }
    .hero p { color: var(--text-700); max-width: 62ch; }
    .hero-box { display: grid; gap: 10px; padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.88); border: 1px solid rgba(14,168,111,0.14); box-shadow: var(--shadow-md); }
    .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
    .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 22px; }
    .side-column { display: grid; gap: 22px; align-content: start; }
    .challenge-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .challenge-card { display: grid; gap: 14px; padding: 20px; border-radius: 18px; border: 1px solid var(--line); background: linear-gradient(180deg, #fff 0%, #f8fbff 100%); }
    .challenge-card.done { border-color: rgba(14,168,111,0.22); background: linear-gradient(180deg, #ffffff 0%, #f1fff8 100%); }
    .challenge-top { display: flex; gap: 12px; align-items: center; }
    .challenge-card p, .weekly-box p { color: var(--text-500); }
    .challenge-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    .challenge-footer span { font-weight: 800; color: var(--text-700); }
    .calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px; }
    .calendar-day { aspect-ratio: 1; border-radius: 16px; display: grid; place-items: center; background: #f5f8fd; border: 1px solid var(--line); color: var(--text-500); font-weight: 800; }
    .calendar-day.active { background: linear-gradient(135deg, var(--mint-500), var(--mint-600)); color: #fff; border-color: transparent; }
    .weekly-box strong { font-size: 1.2rem; display: block; margin-bottom: 8px; }
    @media (max-width: 1280px) { .hero, .content-grid, .stats-grid, .challenge-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 980px) { .hero, .content-grid, .stats-grid, .challenge-grid, .calendar-grid { grid-template-columns: 1fr; } }
  `]
})
export class AlunoDesafiosDiariosComponent {
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
    { title: 'Desafios ativos', value: '3', detail: 'tarefas para hoje', icon: 'DA', tone: 'mint' as const },
    { title: 'XP disponível', value: '+240', detail: 'ganho potencial do dia', icon: 'XP', tone: 'purple' as const },
    { title: 'Sequência', value: '7 dias', detail: 'ritmo mantido', icon: 'ST', tone: 'blue' as const },
    { title: 'Fase da semana', value: 'Quinta', detail: 'faltam 2 dias para fechar a meta', icon: 'WK', tone: 'amber' as const }
  ];

  readonly challenges = [
    { icon: 'LE', title: 'Leitura-relâmpago', description: 'Leia um enunciado curto e marque a palavra que indica a ação principal.', progress: 100, xp: 60, done: true, action: 'Concluído' },
    { icon: 'DV', title: 'Divisão em foco', description: 'Resolva 4 contas pequenas de divisão com apoio visual.', progress: 70, xp: 80, done: false, action: 'Continuar' },
    { icon: 'FR', title: 'Frações rápidas', description: 'Escolha a fração correta em situações do cotidiano.', progress: 45, xp: 100, done: false, action: 'Começar' }
  ];

  readonly week = [
    { label: 'S', active: true },
    { label: 'T', active: true },
    { label: 'Q', active: true },
    { label: 'Q', active: true },
    { label: 'S', active: false },
    { label: 'S', active: false },
    { label: 'D', active: false }
  ];
}