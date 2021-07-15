import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'login', icon: 'home' },
    { title: 'Sobre', url: 'folder', icon: 'information-circle' },
  ];
  public labels = ['Ionic', 'Angular', 'PHP','API'];
  constructor() {}
}
