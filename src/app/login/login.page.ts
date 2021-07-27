
import { PostService } from 'src/Service/post.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicosPage } from '../servicos/servicos.page';
import { AddClientePage } from '../add-cliente/add-cliente.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
cpf: any;
senha: any;

  constructor(public service: PostService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
logar(){
      this.service.login(this.cpf,this.senha).subscribe((res: any)=>{
            console.log('SUCCESS',res);
   },(err: any)=>{
      console.log('erro',err);
   });
  this.modalCtrl.create({
        component: ServicosPage
      }).then(modal => modal.present());


}
  cadastro(){
    this.modalCtrl.create({
      component: AddClientePage
    }).then(modal => modal.present());
  }

}
