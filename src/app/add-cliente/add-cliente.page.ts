import { PostService } from './../../Service/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {


  constructor(private servico: PostService) { }

  ngOnInit() {
  }


  /*enviando(form: NgForm){
    const cliente = form.value;
    this.servico.create(cliente).subscribe(res=>{
      console.log(res);
    });
  }*/

}
