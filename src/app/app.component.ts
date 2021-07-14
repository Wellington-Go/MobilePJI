import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'servicos', icon: 'home' },
    { title: 'Cadastro', url: 'add-cliente', icon: 'people' },
  ];
  public labels = ['Ionic', 'Angular', 'PHP','API'];
  constructor() {}
}
