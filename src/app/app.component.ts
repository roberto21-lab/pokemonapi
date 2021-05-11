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
    { title: 'Habilidades', url: 'ability', icon: 'barbell-outline' },
    { title: 'Favoritos', url: 'favorites', icon: 'heart-outline' },
    
    
  ];

 darkMode: boolean = true;
  


  constructor() {}

  ngOnInit(){
    this.checkDarkTheme()
  }

  cambio(){
    console.log('cambio')
    this.darkMode = !this.darkMode; 

    document.body.classList.toggle('dark')
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark)
    if(prefersDark.matches){
      document.body.classList.toggle('dark')
    }
    this.cambio()
  }

}

