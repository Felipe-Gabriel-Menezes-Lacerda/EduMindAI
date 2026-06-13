import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AlunoDashboardComponent } from './pages/aluno-dashboard/aluno-dashboard.component';
import { AlunoDiagnosticoComponent } from './pages/aluno-diagnostico/aluno-diagnostico.component';
import { AlunoTrilhaComponent } from './pages/aluno-trilha/aluno-trilha.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';
import { QuestCriarComponent } from './pages/quest-criar/quest-criar.component';
import { QuestMissaoComponent } from './pages/quest-missao/quest-missao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aluno/dashboard', component: AlunoDashboardComponent },
  { path: 'aluno/diagnostico', component: AlunoDiagnosticoComponent },
  { path: 'aluno/trilha', component: AlunoTrilhaComponent },
  { path: 'professor/dashboard', component: ProfessorDashboardComponent },
  { path: 'professor/quest/criar', component: QuestCriarComponent },
  { path: 'aluno/quest/missao', component: QuestMissaoComponent },
  { path: '**', redirectTo: 'login' }
];
