import { PostService } from './../../Service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
id: any;
nome: any;
email: any;
sugestoes: any;
  constructor(private route: ActivatedRoute,private router: Router, private service: PostService)
  {
    this.route.params.subscribe((param: any)=>{
      this.id = param.id;
      console.log(this.id);
      this.buscar(this.id);
      /*this.nome = param.nome;
      this.email = param.email;
      this.sugestoes = param.sugestoes;*/
    });
  }

  ngOnInit() {
  }


buscar(id){
    this.service.buscar(id).subscribe((res: any)=>{
      console.log('SUCCESS',res);
      const avaliar = res[0];
      this.nome = avaliar.nome;
      this.email = avaliar.email;
      this.sugestoes = avaliar.sugestoes;
  },(err: any)=>{
    console.log('erro',err);
    alert('ERRO!');
  });

}// final do buscar

update(){
  const data = {
    nome: this.nome,
    email: this.email,
    sugestoes: this.sugestoes,
  };
  this.service.atualizar(this.id,data).subscribe((res: any)=>{
    console.log('SUCCESS',res);
    this.router.navigateByUrl('/login');
  },(err: any)=>{
    console.log('erro',err);
    alert('ERRO!');
  });

} // final do update

}
