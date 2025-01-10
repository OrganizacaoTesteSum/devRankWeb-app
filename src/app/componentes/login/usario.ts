export interface UsuarioInfo {
  sub: string;
  unique_name: string;
  role: string;
  permissaoId: string[];
  nbf: number;
  exp: number;
  iat: number;
}