import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  pokemons = [];
  type = '';
  
  

  constructor(private router: Router ,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let tipo = this.activatedRoute.snapshot.queryParams['tipo']; // aqui obtengo el valor del queryparams "tipo"
    let hability = this.activatedRoute.snapshot.queryParams['hability'];
    // let favorites = this.activatedRoute.snapshot.queryParams['favorites'];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    for (let idPokemon = 1; idPokemon < 200
      ; idPokemon++) {
      this.getNombreAsync(idPokemon);  // fetch de pokemon por id (idPokemon)
    }
    // if(favorites){
    //   setTimeout(() => this.favoritePokemos(), 3000);
    // }
    if(tipo) {
      setTimeout(() => this.filterPokemon(tipo), 3000);
    }
    if(hability) {
       setTimeout(() => this.filterHability(hability), 3000) 
    }
  }

  // favoritePokemos() {
  //   const getFavorites: string = '[' + localStorage.getItem('favorites') +']';
  //   const favoriteDetails = [];
  //   for(const objectId of JSON.parse(getFavorites)) {
  //     if(objectId && objectId.id) {
  //       favoriteDetails.push(this.pokemons.filter(pokemon => pokemon.id == objectId?.id)[0])
  //     }
  //   }
  //   this.pokemons = favoriteDetails;
  // }

  filterPokemon(type) {
    const filterPokemon = this.pokemons.filter(pokemon => pokemon.types[0].type.name == type);
    this.pokemons = filterPokemon;
  }

  filterHability(hability){
    console.log(this.pokemons)
    const filterHability = this.pokemons.filter(pokemon => pokemon.abilities[0].ability.name == hability);
    console.log(filterHability)
    this.pokemons = filterHability;
  }
 
  async getNombreAsync(poke) {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const resPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poke}`
      );
      const pokemon = await resPokemon.json(); // obtengo la data del pokemon en formato Json
      this.pokemons.push(pokemon); // agrego al pokemon al arreglo de pokemones
      this.pokemons.sort(function (prev, next) {
        return prev.id - next.id;
        // ordeno el arreglo de pokemos por id de manera numerica.
      });
    } catch (error) {
      console.log(error);
    }
  }
 
}
