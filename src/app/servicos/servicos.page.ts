import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
id: string="";
descricao: string="";
data: string="";
valor: string="";
  constructor(private service:PostService, private router: Router) { }

  ngOnInit() {
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao :'chamado',
        descricao: this.descricao,
        data:this.data,
        valor:this.valor
     
      };
      this.service.dadosApi(dados,'api.php').subscribe(data =>{
        if (data['success']){
         this.router.navigate(['usuarios']);
         console.log(data);
         this.id="";this.descricao="",this.data="";this.valor="";
        }
      });
    });
    }//final do méto

}
