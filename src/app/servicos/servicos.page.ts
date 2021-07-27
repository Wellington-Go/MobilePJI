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
nome: any;
valor: any;

  constructor(public service: PostService) { }

ngOnInit() {
  }
enviar(){
const data = {
  nome: this.nome,
  valor: this.valor,
};
this.service.create(data).subscribe((res: any)=>{
  console.log('SUCCESS ===',res);
},(error: any)=>{
  console.log('ERROR ===',error);
});

}//final do método cadastrar()



}
