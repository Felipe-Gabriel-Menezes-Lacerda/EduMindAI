import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  template: `
    <article class="stat-card" [class.purple]="tone === 'purple'" [class.blue]="tone === 'blue'" [class.amber]="tone === 'amber'">
      <div class="icon">{{ icon }}</div>
      <div class="body">
        <span>{{ title }}</span>
        <strong>{{ value }}</strong>
        <small>{{ detail }}</small>
      </div>
      <app-progress-bar *ngIf="progress !== undefined" [value]="progress" [small]="true"></app-progress-bar>
    </article>
  `,
  styles: [`
    .stat-card { display: grid; gap: 14px; padding: 22px; border: 1px solid var(--line); border-radius: 20px; background: #fff; box-shadow: var(--shadow-md); }
    .icon { width: 54px; height: 54px; border-radius: 18px; display: grid; place-items: center; font-weight: 800; background: #eafaf3; color: var(--mint-600); }
    .purple .icon { background: #f3edff; color: #8b63f7; }
    .blue .icon { background: #ebf4ff; color: #3575ea; }
    .amber .icon { background: #fff4dd; color: #e39c1c; }
    .body { display: grid; gap: 6px; }
    span { color: var(--text-500); font-size: 0.84rem; font-weight: 700; }
    strong { font-size: 1.95rem; line-height: 1; }
    small { color: var(--text-700); font-weight: 700; }
  `]
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() detail = '';
  @Input() icon = '';
  @Input() progress?: number;
  @Input() tone: 'mint' | 'purple' | 'blue' | 'amber' = 'mint';
}
