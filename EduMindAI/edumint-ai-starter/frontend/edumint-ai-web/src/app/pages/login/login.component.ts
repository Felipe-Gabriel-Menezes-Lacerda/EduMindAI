import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { loginBeneficios } from '../../core/mock-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly beneficios = loginBeneficios;
  perfil: 'aluno' | 'professor' = 'aluno';
  email = 'ana@email.com';
  senha = '123456';

  constructor(private readonly router: Router) {}

  entrar(): void {
    this.router.navigateByUrl(this.perfil === 'aluno' ? '/aluno/dashboard' : '/professor/dashboard');
  }

  iniciarDiagnostico(): void {
    this.router.navigateByUrl('/aluno/diagnostico');
  }
}
