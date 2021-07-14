import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
import * as internal from 'stream';

/*export interface Cliente{
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  ativo: boolean;
  senha: string;

}*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
}
