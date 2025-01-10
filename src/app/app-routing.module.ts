import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardServiceService } from './services/auth/auth-guard.service';
import { InicioComponent } from './componentes/home/inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuardServiceService],
    children: [

      // Rotas Paginas
      
      {
        path: '',
        component: InicioComponent,
        canActivate: [AuthGuardServiceService],
      },
    ]

  },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
