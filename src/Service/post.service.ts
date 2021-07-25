import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Dados do Banco
export interface Cliente{
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  ativo: string;
  senha: string;

}


@Injectable({
  providedIn: 'root'
})
export class PostService {
private serve='http://localhost/api';

  constructor(private http: HttpClient) {}

  getAll(cpf: any, senha: any){
    return this.http.get(this.serve +'/' + cpf + '/' + senha);
  }

}
