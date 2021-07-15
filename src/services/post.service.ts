import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  server: string= "http://127.0.0.1/apiphp/";
  constructor( private http: HttpClient) { }
  dadosApi(dados:any, nomeApi: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    let url = this.server + nomeApi;
    return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res)
  }
}
