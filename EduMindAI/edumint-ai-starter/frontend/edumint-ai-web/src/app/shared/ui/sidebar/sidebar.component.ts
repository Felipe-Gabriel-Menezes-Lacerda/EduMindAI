import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../../core/models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <aside class="sidebar" [class.dark]="tone === 'dark'">
      <div class="brand"><div class="brand-mark">EM</div><div><strong>EduMint AI</strong><span>{{ brandSubtitle }}</span></div></div>
      <nav><a *ngFor="let item of items" [routerLink]="item.route" [class.active]="item.key === activeKey"><span class="item-icon">{{ item.icon }}</span>{{ item.label }}</a></nav>
      <div *ngIf="footerTitle" class="footer-card"><div class="footer-icon">{{ footerIcon }}</div><strong>{{ footerTitle }}</strong><p>{{ footerSubtitle }}</p><small *ngIf="footerNote">{{ footerNote }}</small></div>
    </aside>
  `,
  styles: [`
    .sidebar { min-height: 100vh; background: #fff; border-right: 1px solid var(--line); padding: 26px 18px; display: flex; flex-direction: column; gap: 26px; }
    .sidebar.dark { background: linear-gradient(180deg, var(--navy-900) 0%, #08204b 100%); color: rgba(255,255,255,0.92); border-right: 0; }
    .brand { display: flex; align-items: center; gap: 12px; }
    .brand strong { display: block; font-size: 1.45rem; }
    .brand span { color: var(--text-500); font-size: 0.83rem; }
    .dark .brand span { color: rgba(255,255,255,0.66); }
    .brand-mark { width: 52px; height: 52px; border-radius: 18px; display: grid; place-items: center; background: linear-gradient(135deg, #14d98b, #0a8f63); color: #fff; font-weight: 900; box-shadow: 0 14px 32px rgba(34,197,139,0.3); }
    nav { display: grid; gap: 8px; }
    nav a { display: flex; align-items: center; gap: 12px; border-radius: 16px; padding: 13px 14px; color: #41506b; font-weight: 700; transition: background var(--transition), color var(--transition); }
    nav a:hover, nav a.active { background: #eefaf4; color: var(--mint-600); }
    .dark nav a { color: rgba(255,255,255,0.82); }
    .dark nav a:hover, .dark nav a.active { background: rgba(34,197,139,0.18); color: #fff; }
    .item-icon { width: 28px; height: 28px; border-radius: 10px; display: grid; place-items: center; background: rgba(16,185,129,0.1); font-size: 0.72rem; font-weight: 900; }
    .dark .item-icon { background: rgba(255,255,255,0.12); }
    .footer-card { margin-top: auto; border-radius: 20px; padding: 18px; display: grid; gap: 10px; border: 1px solid var(--line); background: linear-gradient(180deg, #ffffff 0%, #f3faf6 100%); }
    .dark .footer-card { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }
    .footer-icon { width: 46px; height: 46px; border-radius: 16px; display: grid; place-items: center; background: rgba(34,197,139,0.16); color: var(--mint-600); font-weight: 900; }
    .dark .footer-icon { color: #8ff2cb; }
    p, small { color: var(--text-500); }
    .dark p, .dark small { color: rgba(255,255,255,0.72); }
  `]
})
export class SidebarComponent {
  @Input() items: NavItem[] = [];
  @Input() activeKey = '';
  @Input() tone: 'light' | 'dark' = 'light';
  @Input() brandSubtitle = 'Cada aluno aprende no seu ritmo';
  @Input() footerTitle = '';
  @Input() footerSubtitle = '';
  @Input() footerNote = '';
  @Input() footerIcon = 'AI';
}
