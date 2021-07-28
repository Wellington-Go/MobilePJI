import { PostService } from './../../Service/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {
nome: any;
cpf: any;
email: any;
telefone: any;
senha: any;
// variavel da segunda tabela
cep: any;
logradouro: any;
numero: any;
complemento: any;
tipo: any;
cidade: any;
bairro: any;
uf: any;

  constructor(private servico: PostService) { }

  ngOnInit() {
  }


add(){
  const data = {
    nome: this.nome,
    cpf: this.cpf,
    email: this.email,
    telefone: this.telefone,
    senha: this.senha,
    cep: this.cep,
    logradouro:this.logradouro,
    numero: this.numero,
    complemento: this.complemento,
    tipo: this.tipo,
    cidade: this.cidade,
    bairro: this.bairro,
    uf: this.uf,

  };
  this.servico.create(data).subscribe((res: any)=>{
    console.log('SUCCESS ===',res);
  },(error: any)=>{
    console.log('ERROR ===',error);
  });
}

}
