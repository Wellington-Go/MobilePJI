import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/Service/post.service';

/*
Modificado: 16/7/21
autor: Wellington
horario: 18H / 00H
*/


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
descricao='';

  constructor(private service: PostService) { }

  ngOnInit() {
  }
  enviar(){
  /*return new Promise(resolve => {
    const dados = {
      requisicao :'add',
      descricao: this.descricao
    };
    this.service.dadosApi(dados,'api.php').subscribe(data =>{
      if (data.success){
       console.log(data);
       this.descricao='';
      }
    });
  });*/
}//final do método cadastrar()



}
