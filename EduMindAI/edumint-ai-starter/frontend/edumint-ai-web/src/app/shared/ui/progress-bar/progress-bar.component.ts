import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `<div class="track" [class.small]="small"><div class="fill" [class.red]="tone === 'red'" [class.amber]="tone === 'amber'" [class.blue]="tone === 'blue'" [style.width.%]="value"></div></div>`,
  styles: [`
    .track { width: 100%; height: 10px; border-radius: 999px; background: #edf2f7; overflow: hidden; }
    .track.small { height: 8px; }
    .fill { height: 100%; border-radius: inherit; background: linear-gradient(135deg, var(--mint-500), var(--mint-600)); }
    .fill.red { background: linear-gradient(135deg, #fb7a7a, var(--red-500)); }
    .fill.amber { background: linear-gradient(135deg, #f7cf66, var(--amber-500)); }
    .fill.blue { background: linear-gradient(135deg, #7db5ff, #3b82f6); }
  `]
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() tone: 'mint' | 'red' | 'amber' | 'blue' = 'mint';
  @Input() small = false;
}
