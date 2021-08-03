import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* componentes para conectar api com ionic
  estar disponivel no youtube a api https://www.youtube.com/watch?v=bqiHfIBh8Xk
*/

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
  listar(){
    return this.http.get('http://localhost/phpapi/backend/listar.php');
  }
  buscar(id){
    return this.http.get('http://localhost/phpapi/backend/buscar.php?id='+id);
  }
  atualizar(id,data){
    return this.http.put('http://localhost/phpapi/backend/atualizar.php?id='+id,data);
  }

}
