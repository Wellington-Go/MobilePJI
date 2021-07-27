import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  create(data){
    return this.http.post('http://localhost/phpapi/backend/create.php',data);
  }
  login(cpf,senha){
    return this.http.get('http://localhost/phpapi/backend/login.php?cpf='+cpf+'senha='+senha);
  }

}
