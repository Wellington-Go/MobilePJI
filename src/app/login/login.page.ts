
import { PostService } from 'src/Service/post.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicosPage } from '../servicos/servicos.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
cpf: string;
senha: string;

  constructor(private service: PostService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  logar(){
    this.service.getAll(this.cpf,this.senha).subscribe(res=>{console.log(res);
    });
      this.modalCtrl.create({
        component: ServicosPage
      }).then(modal => modal.present());
  }

}
