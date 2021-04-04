import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokemones', url: '/folder/pokemones', icon: 'list-outline' },
    { title: 'Tipos de pokemones', url: 'types', icon: 'accessibility-outline' },
    { title: 'Habilidades', url: '/folder/hablidades', icon: 'barbell-outline' },
    { title: 'Favoritos', url: '/folder/favoritos', icon: 'heart-outline' },
  ];
  
  constructor() {}
}

