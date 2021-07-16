import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PostService } from 'src/services/post.service';

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

  constructor(private service: PostService) { }

  ngOnInit() {
  }

  enviando(form: NgForm){

    //console.log(form.value);

    const servico = form.value;
    this.service.create(servico);
    }
  //Final do Método Criar Serviços


}
