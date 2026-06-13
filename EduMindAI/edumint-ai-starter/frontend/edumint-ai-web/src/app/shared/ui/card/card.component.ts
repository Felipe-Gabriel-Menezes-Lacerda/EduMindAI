import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <section class="ui-card" [class.compact]="compact">
      <header *ngIf="title || subtitle || badge" class="ui-card__header">
        <div>
          <h3 *ngIf="title">{{ title }}</h3>
          <p *ngIf="subtitle">{{ subtitle }}</p>
        </div>
        <app-badge *ngIf="badge" [text]="badge" [tone]="badgeTone"></app-badge>
      </header>
      <ng-content></ng-content>
    </section>
  `,
  styles: [`
    .ui-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); box-shadow: var(--shadow-md); padding: 24px; display: grid; gap: 18px; }
    .ui-card.compact { padding: 18px; }
    .ui-card__header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    h3 { font-size: 1.2rem; margin-bottom: 6px; }
    p { color: var(--text-500); font-size: 0.92rem; }
  `]
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() badge = '';
  @Input() compact = false;
  @Input() badgeTone: 'success' | 'warn' | 'info' = 'success';
}
