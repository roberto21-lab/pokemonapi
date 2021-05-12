import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit {
  public folder: string;
  tipos = [];
  activatedRoute: any;
  start: number = 0;
  end: number = 20;
  constructor(private router: Router) {}

  ngOnInit() {
    for (let idPokemon = this.start; idPokemon < this.end; idPokemon++) {
      this.getHolaAsync();
      
    }
  }

  async getHolaAsync() {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const restipo = await fetch(`https://pokeapi.co/api/v2/type`);
      const tipo = await restipo.json();

      this.tipos = tipo.results;
      
    } catch (error) {
      console.log(error); 
    }
    console.log(this.tipos);
  }

  type(tipos) {
    this.router.navigate(['/folder/pokemones'], {
      queryParams: { tipo: tipos.name },
    });
  }
}
