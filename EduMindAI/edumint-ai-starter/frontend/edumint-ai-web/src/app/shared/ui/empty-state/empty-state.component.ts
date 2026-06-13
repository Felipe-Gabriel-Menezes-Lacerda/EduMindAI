import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `<section class="empty-state"><div class="icon">{{ icon }}</div><h3>{{ title }}</h3><p>{{ description }}</p></section>`,
  styles: [`
    .empty-state { border: 1px dashed #c7d6ea; border-radius: 20px; padding: 28px; text-align: center; display: grid; gap: 12px; background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%); }
    .icon { width: 62px; height: 62px; margin: 0 auto; border-radius: 20px; display: grid; place-items: center; background: var(--mint-100); color: var(--mint-600); font-weight: 900; }
    h3 { font-size: 1.2rem; }
    p { color: var(--text-500); max-width: 460px; margin: 0 auto; }
  `]
})
export class EmptyStateComponent {
  @Input() icon = 'EM';
  @Input() title = '';
  @Input() description = '';
}
