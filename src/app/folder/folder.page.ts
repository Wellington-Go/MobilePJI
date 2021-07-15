import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public cards = [   {img : 'img1.png',  sub: ' viagens',  tit:'cidade',
  cont:'No mês de julho de 2019 visitamos a ilha. Depos de 985 km de estrada.'}];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
