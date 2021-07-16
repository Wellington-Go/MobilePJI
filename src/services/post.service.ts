import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';

/*
Modificado: 16/7/21
autor: Wellington
horario: 18H / 00H
*/

export interface Servico{
  id: string;
  descricao: string;
  data: string;
  valor: string;
  cliId: string;

}


@Injectable({
  providedIn: 'root'
})
export class PostService {
private url = 'http://localhost/api/api.php';
  constructor( private http: HttpClient) { }
  /*dadosApi(dados: any, nomeApi: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const url = this.server + nomeApi;
    return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res);
  }*/

  // http POST
create(servico: Servico){
  return this.http.post(this.url, servico);
}

}
