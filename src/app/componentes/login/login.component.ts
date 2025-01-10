import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formularioLogin!: FormGroup;
  usernemail: string = ''
  password: string = ''
  loginError: boolean = false;
  loginErrorMessage: string = ''
  passwordVisible: boolean = false;
  loading: boolean = false;
  tipoCampoSenha: string = 'password';


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.formularioLogin = this.formBuilder.group({
      usernemail: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
    }

    this.formularioLogin = this.formBuilder.group({
      usernemail: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  onLogin(): void {
    this.loginError = false;
    this.loginErrorMessage = '';

    if (this.formularioLogin.valid) {
      const { usernemail, password } = this.formularioLogin.value;

      this.loading = true;

      this.authService.login(usernemail, password).subscribe(
        (response: any) => {
          if (response.data) {
            const token = response.data;
            this.authService.setToken(token);
            this.router.navigate(['']);
          } else {
            this.loginError = true;
            this.loginErrorMessage = 'Credenciais incorretas.';
          }
        },
        (error) => {
          this.loginError = true;
          this.loginErrorMessage = 'Erro de autenticação.';
        }
      ).add(() => {
        // Define a variável loading para false após o término do processo de login
        this.loading = false;
      });
    } else {
      this.formularioLogin.markAllAsTouched();
    }
  }

  alternarVisibilidadeSenha() {
    this.tipoCampoSenha = this.tipoCampoSenha === 'password' ? 'text' : 'password';
  }
}
