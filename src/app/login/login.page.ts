
import { PostService } from 'src/Service/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
cpf: any;
senha: any;

  constructor(public service: PostService, private router: Router) { }

  ngOnInit() {
  }
logar(){
      this.service.login(this.cpf,this.senha).subscribe((res: any)=>{
            console.log('SUCCESS',res);
   },(err: any)=>{
      console.log('erro',err);
   });

}
cadastro(){
    this.router.navigate(['add-cliente']);
}

}
