import { Component, Input } from '@angular/core';
import { NavItem } from '../../core/models';
import { SidebarComponent } from '../ui/sidebar/sidebar.component';
import { TopbarComponent } from '../ui/topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() items: NavItem[] = [];
  @Input() activeKey = '';
  @Input() sidebarTone: 'light' | 'dark' = 'light';
  @Input() topbarTone: 'light' | 'dark' = 'light';
  @Input() userName = 'Ana Souza';
  @Input() userRole = 'Aluno';
  @Input() initials = 'AS';
  @Input() showMenu = false;
  @Input() footerTitle = '';
  @Input() footerSubtitle = '';
  @Input() footerNote = '';
  @Input() footerIcon = 'AI';
}
