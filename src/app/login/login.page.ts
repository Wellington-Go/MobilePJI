
import { PostService } from 'src/Service/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
nome: any;
email: any;
sugestoes: any;
dicas: any = [];

  constructor(public service: PostService, private router: Router) { this.listar();}

  ngOnInit() {
  }

add(){
    const data = {
      nome: this.nome,
      email: this.email,
      sugestoes: this.sugestoes,
    };
      this.service.create(data).subscribe((res: any)=>{
        const result = res.dados;
        if(result){
          localStorage.setItem('dados', JSON.stringify(res.dados));
          console.log('SUCCESS',res);
          this.nome = '';
          this.email = '';
          this.sugestoes = '';
          alert('SUCCESS');
        }
        this.router.navigate(['login']);
   },(err: any)=>{
      console.log('erro',err);
      alert('ERRO!');
   });

}// final do create

listar(){
  this.service.listar().subscribe((res: any)=>{
    console.log('SUCCESS',res);
    this.dicas = res;
},(err: any)=>{
  console.log('erro',err);
  alert('ERRO!');
});

}//final do listar



}
