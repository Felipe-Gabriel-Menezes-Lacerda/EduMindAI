import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { NavItem } from '../../core/models';

interface ChatMessage {
  speaker: 'aluno' | 'ia';
  text: string;
}

@Component({
  selector: 'app-aluno-ia-tutor',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent, CardComponent, BadgeComponent],
  template: `
    <app-layout [items]="menuItems" activeKey="tutor" sidebarTone="light" topbarTone="light" userName="Ana Souza" userRole="Aluno" initials="AS" footerTitle="Tutor em ação" footerSubtitle="Uma conversa guiada para destravar dúvidas em tempo real" footerIcon="AI">
      <div class="app-page">
        <section class="hero surface">
          <div>
            <span class="kicker">IA Tutor</span>
            <h1>Converse com a IA como se estivesse com um tutor ao lado.</h1>
            <p>Explique sua dúvida e receba uma orientação curta, prática e adaptada ao contexto do projeto.</p>
          </div>
          <div class="hero-box">
            <strong>Como funciona</strong>
            <p>A IA responde com exemplos, passo a passo e sugestões de estudo para matemática e leitura.</p>
            <app-badge text="Chat demonstrativo" tone="info"></app-badge>
          </div>
        </section>

        <div class="chat-grid">
          <app-card title="Sala de conversa" subtitle="Digite uma dúvida, peça um resumo ou solicite um exemplo guiado.">
            <div class="chat-window">
              <article *ngFor="let message of messages" class="message" [class.ai]="message.speaker === 'ia'">
                <div class="avatar">{{ message.speaker === 'ia' ? 'AI' : 'AS' }}</div>
                <div class="bubble">
                  <strong>{{ message.speaker === 'ia' ? 'EduMint IA' : 'Ana Souza' }}</strong>
                  <p>{{ message.text }}</p>
                </div>
              </article>
            </div>

            <form class="composer" (ngSubmit)="sendMessage()">
              <textarea class="form-control" rows="3" [(ngModel)]="draft" name="draft" placeholder="Ex.: explique divisão com um exemplo simples"></textarea>
              <div class="composer-actions">
                <button class="btn-ghost" type="button" (click)="fillPrompt('Me ajude com frações de forma simples')">Frações</button>
                <button class="btn-ghost" type="button" (click)="fillPrompt('Explique divisão passo a passo')">Divisão</button>
                <button class="btn-primary" type="submit">Enviar</button>
              </div>
            </form>
          </app-card>

          <div class="side-column">
            <app-card title="Respostas rápidas" [compact]="true">
              <ul class="quick-list">
                <li *ngFor="let prompt of prompts" (click)="fillPrompt(prompt)">{{ prompt }}</li>
              </ul>
            </app-card>

            <app-card title="O que o tutor sabe fazer" [compact]="true">
              <ul class="feature-list">
                <li>Explicar conceitos com linguagem simples.</li>
                <li>Dar um passo a passo de resolução.</li>
                <li>Sugerir leitura, prática ou revisão curta.</li>
              </ul>
            </app-card>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    h1 { font-size: clamp(2rem, 3vw, 3.2rem); margin: 10px 0 12px; line-height: 1.05; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 18px; padding: 28px; background: linear-gradient(135deg, #f4f8ff 0%, #f3fff7 100%); }
    .hero p { color: var(--text-700); max-width: 62ch; }
    .hero-box { display: grid; gap: 10px; padding: 20px; border-radius: 22px; background: rgba(255,255,255,0.88); border: 1px solid rgba(34,197,139,0.14); box-shadow: var(--shadow-md); }
    .chat-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 22px; }
    .side-column { display: grid; gap: 22px; align-content: start; }
    .chat-window { display: grid; gap: 14px; padding: 4px 2px 8px; max-height: 520px; overflow: auto; }
    .message { display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 12px; align-items: start; }
    .message.ai .avatar { background: linear-gradient(135deg, #14d98b, #0a8f63); }
    .avatar { width: 54px; height: 54px; border-radius: 18px; display: grid; place-items: center; background: linear-gradient(135deg, #f1b862, #ff8a64); color: #fff; font-weight: 900; }
    .bubble { padding: 16px 18px; border-radius: 18px; background: #f8fbff; border: 1px solid var(--line); box-shadow: 0 10px 24px rgba(7,23,53,0.04); }
    .message.ai .bubble { background: linear-gradient(180deg, #f5fffa 0%, #ecfff5 100%); }
    .bubble p { color: var(--text-700); margin-top: 4px; }
    .composer { display: grid; gap: 14px; margin-top: 14px; }
    .composer-actions { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
    .quick-list, .feature-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
    .quick-list li { padding: 12px 14px; border-radius: 14px; background: #f6fafe; border: 1px solid var(--line); cursor: pointer; transition: transform var(--transition), box-shadow var(--transition); }
    .quick-list li:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
    .feature-list li { padding-left: 18px; position: relative; color: var(--text-700); }
    .feature-list li::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--mint-500); position: absolute; left: 0; top: 9px; }
    @media (max-width: 1280px) { .hero, .chat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 980px) { .hero, .chat-grid, .composer-actions { grid-template-columns: 1fr; } }
  `]
})
export class AlunoIATutorComponent {
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

  messages: ChatMessage[] = [
    { speaker: 'ia', text: 'Olá, Ana. Me diga o que você quer entender que eu explico com um exemplo simples.' },
    { speaker: 'aluno', text: 'Estou com dificuldade em divisão.' },
    { speaker: 'ia', text: 'Vamos por partes: dividir é repartir em partes iguais. Se você tem 12 itens e 3 pessoas, cada uma recebe 4.' }
  ];

  prompts = [
    'Explique divisão com um exemplo simples',
    'Resuma frações em 3 passos',
    'Me ajude a interpretar um enunciado',
    'Monte um plano de estudo de 10 minutos'
  ];

  draft = '';

  fillPrompt(text: string): void {
    this.draft = text;
  }

  sendMessage(): void {
    const text = this.draft.trim();
    if (!text) {
      return;
    }

    this.messages = [...this.messages, { speaker: 'aluno', text }, { speaker: 'ia', text: this.replyFor(text) }];
    this.draft = '';
  }

  private replyFor(text: string): string {
    const normalized = text.toLowerCase();

    if (normalized.includes('divis')) {
      return 'Divisão funciona quando repartimos em partes iguais. Pense em grupos com a mesma quantidade e teste com números pequenos primeiro.';
    }

    if (normalized.includes('fra')) {
      return 'Frações mostram partes de um todo. Primeiro identifique o total, depois conte quantas partes estão em destaque.';
    }

    if (normalized.includes('enunci')) {
      return 'Para interpretar um enunciado, leia duas vezes, sublinhe a ação principal e destaque os dados importantes antes de calcular.';
    }

    return 'Entendi. Vou te orientar em passos curtos: primeiro releitura, depois exemplo guiado e por fim um exercício parecido para praticar.';
  }
}