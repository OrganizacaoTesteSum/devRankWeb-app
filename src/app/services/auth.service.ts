import { Injectable } from '@angular/core';
import { UsuarioInfo } from '../componentes/login/usario';
import { Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


interface login {
  token: string;
}

const permissoes: { [id: number]: string } = {
  1: 'Cadastrar Cliente',
  2: 'Cadastrar Representante',
  3: 'Cadastrar Usuario',
  4: 'Cadastrar Cliente Serial',
  5: 'Gerar Chave Cliente',
  6: 'Consultar Cliente',
  7: 'Consultar Representante',
  8: 'Consultar Usuario',
  9: 'Bloquear Cliente',
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API: string;
  private LOGIN_TIME_KEY: string = 'login_time';

  constructor(private http: HttpClient, private ApiService: ApiService) {
    this.API = `${this.ApiService.apiUrl}/Usuario`;
  }

login(username: string, password: string): Observable<login> {
  const body = {
    usuarioEmail: username,
    usuarioSenha: password
  };

  return this.http.post<login>(`${this.API}/login`, body).pipe(
    tap(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem(this.LOGIN_TIME_KEY, new Date().toISOString());
    })
  );
}

setToken(token: string): void {
  localStorage.setItem('token', token);
}

getToken(): string | null {
  if (typeof window === 'undefined') {
    return null; 
  }
  return localStorage.getItem('token');
}

logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem(this.LOGIN_TIME_KEY);
}

isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false; // Retorna false se estiver no SSR
  }
  const token = this.getToken();
  const loginTime = localStorage.getItem(this.LOGIN_TIME_KEY);

  if (!token || !loginTime) {
    return false;
  }

  const now = new Date();
  const loginDateTime = new Date(loginTime);
  const hoursElapsed = Math.abs(now.getTime() - loginDateTime.getTime()) / 36e5;

  if (hoursElapsed > 24) {
    this.logout();
    return false;
  }

  return true;
}


checkLogin(): boolean {
  if (this.isAuthenticated()) {
    return true;
  } else {
    return false;
  }
}

usuarioInfo(): UsuarioInfo {
  const token = this.getToken();
  if (!token) {
    throw new Error('Token not found');
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));

  if (decodedToken && typeof decodedToken === 'object') {
    return {
      sub: decodedToken.sub,
      unique_name: decodedToken.unique_name,
      role: decodedToken.role,
      permissaoId: decodedToken.PermissaoId,
      nbf: decodedToken.nbf,
      exp: decodedToken.exp,
      iat: decodedToken.iat,
    };
  } else {
    throw new Error('Invalid token format');
  }

}

getUserID(): Observable<number> {
  const token = this.getToken();
  const userInfo = this.usuarioInfo();
  const sub = userInfo.sub;

  if (!token) {
    return throwError('Token not found');
  }

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  return this.http.get<number>(`${this.API}/${sub}`, { headers });
}

validatePermissao(permissaoId: number): boolean {
  const usuarioInfo = this.usuarioInfo();
  return usuarioInfo.permissaoId.includes(permissaoId.toString());
}

}
