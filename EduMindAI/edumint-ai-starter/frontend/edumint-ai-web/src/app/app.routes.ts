import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AlunoDashboardComponent } from './pages/aluno-dashboard/aluno-dashboard.component';
import { AlunoDiagnosticoComponent } from './pages/aluno-diagnostico/aluno-diagnostico.component';
import { AlunoTrilhaComponent } from './pages/aluno-trilha/aluno-trilha.component';
import { ProfessorDashboardComponent } from './pages/professor-dashboard/professor-dashboard.component';
import { QuestCriarComponent } from './pages/quest-criar/quest-criar.component';
import { QuestMissaoComponent } from './pages/quest-missao/quest-missao.component';
import { AlunoRelatoriosComponent } from './pages/aluno-relatorios/aluno-relatorios.component';
import { AlunoConquistasComponent } from './pages/aluno-conquistas/aluno-conquistas.component';
import { AlunoBibliotecaComponent } from './pages/aluno-biblioteca/aluno-biblioteca.component';
import { AlunoIATutorComponent } from './pages/aluno-ia-tutor/aluno-ia-tutor.component';
import { AlunoDesafiosDiariosComponent } from './pages/aluno-desafios-diarios/aluno-desafios-diarios.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aluno/dashboard', component: AlunoDashboardComponent, canActivate: [authGuard] },
  { path: 'aluno/diagnostico', component: AlunoDiagnosticoComponent, canActivate: [authGuard] },
  { path: 'aluno/trilha', component: AlunoTrilhaComponent, canActivate: [authGuard] },
  { path: 'aluno/relatorios', component: AlunoRelatoriosComponent, canActivate: [authGuard] },
  { path: 'aluno/conquistas', component: AlunoConquistasComponent, canActivate: [authGuard] },
  { path: 'aluno/biblioteca', component: AlunoBibliotecaComponent, canActivate: [authGuard] },
  { path: 'aluno/tutor', component: AlunoIATutorComponent, canActivate: [authGuard] },
  { path: 'aluno/desafios', component: AlunoDesafiosDiariosComponent, canActivate: [authGuard] },
  { path: 'professor/dashboard', component: ProfessorDashboardComponent, canActivate: [authGuard] },
  { path: 'professor/quest/criar', component: QuestCriarComponent, canActivate: [authGuard] },
  { path: 'aluno/quest/missao', component: QuestMissaoComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
