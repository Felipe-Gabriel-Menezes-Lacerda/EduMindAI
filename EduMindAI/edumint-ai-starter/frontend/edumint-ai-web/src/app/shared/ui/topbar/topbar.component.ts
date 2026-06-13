import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="topbar" [class.dark]="tone === 'dark'">
      <div class="left"><button *ngIf="showMenu" class="menu">|||</button><span class="slogan">{{ slogan }}</span></div>
      <div class="right"><span class="help">Precisa de ajuda?</span><span class="notification">ON</span><div class="user"><div class="avatar">{{ initials }}</div><div><strong>{{ userName }}</strong><small>{{ userRole }}</small></div></div></div>
    </header>
  `,
  styles: [`
    .topbar { min-height: 78px; border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.88); backdrop-filter: blur(12px); display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 30px; position: sticky; top: 0; z-index: 10; }
    .topbar.dark { background: linear-gradient(90deg, var(--navy-900) 0%, var(--navy-800) 100%); color: #fff; border-bottom: 0; }
    .left, .right, .user { display: flex; align-items: center; gap: 14px; }
    .left { min-width: 0; }
    .slogan { font-weight: 700; color: var(--text-700); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .dark .slogan, .dark .help, .dark small { color: rgba(255,255,255,0.8); }
    .menu { width: 42px; height: 42px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); color: inherit; display: grid; place-items: center; letter-spacing: -1px; cursor: pointer; }
    .notification, .avatar { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; }
    .notification { background: rgba(34,197,139,0.16); color: var(--mint-600); font-size: 0.7rem; }
    .dark .notification { color: #7ef1c9; background: rgba(126,241,201,0.14); }
    .avatar { background: linear-gradient(135deg, #f1b862, #ff8a64); color: #fff; }
    .user { border-radius: 999px; padding: 6px 6px 6px 10px; background: rgba(255,255,255,0.82); }
    .dark .user { background: rgba(255,255,255,0.08); }
    strong { display: block; font-size: 0.92rem; }
    small { display: block; color: var(--text-500); font-size: 0.76rem; }
    .help { color: var(--text-500); font-weight: 700; }
    @media (max-width: 780px) { .topbar { padding: 16px; flex-direction: column; align-items: stretch; } .right { justify-content: space-between; } .help { display: none; } }
  `]
})
export class TopbarComponent {
  @Input() slogan = 'Cada aluno aprende no seu ritmo';
  @Input() userName = 'Ana Souza';
  @Input() userRole = 'Aluno';
  @Input() initials = 'AS';
  @Input() tone: 'light' | 'dark' = 'light';
  @Input() showMenu = false;
}
