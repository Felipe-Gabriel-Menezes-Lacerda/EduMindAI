import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<span class="badge" [class.success]="tone === 'success'" [class.warn]="tone === 'warn'" [class.info]="tone === 'info'">{{ text }}</span>`,
  styles: [`
    .badge { display: inline-flex; align-items: center; padding: 7px 12px; border-radius: 999px; background: #eef8ff; color: #2563eb; font-size: 0.78rem; font-weight: 800; }
    .badge.success { background: #e9fbf3; color: #0c9f68; }
    .badge.warn { background: #fff7df; color: #c48308; }
    .badge.info { background: #f1f3ff; color: #6b5bf5; }
  `]
})
export class BadgeComponent {
  @Input() text = '';
  @Input() tone: 'success' | 'warn' | 'info' = 'success';
}
