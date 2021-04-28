import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  pokemons: any[] = [] ;
  favoritesPokemons: any[];
  poke: any [];
  brian: any[] = [];

  constructor() {}

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.pokemons = [];
    const getFavoritos = localStorage.getItem('favoritos');
    console.log(getFavoritos);
    this.getFavoritesPokemons();
  }

  // id de pokemones listos para usar

  getFavoritesPokemons() {
    let getFavoritos: string = '[' + localStorage.getItem('favoritos') + ']';

    let pokemonsJson = JSON.parse(getFavoritos);

    this.favoritesPokemons = pokemonsJson;

    console.log(this.favoritesPokemons);

    this.favoritesPokemons.forEach((element) => {
      this.getPokemonApi(element)

    });

    //   const jara = [1,8,9,56,8];
    //   let total = 0
    //  jara.forEach(element =>{
    //   total = total + element
    //  })
    //  console.log(total)
  }
  // ionViewDidEnter(){
  //   console.log('hola')
  // }

  //  traer pokemones mediante un id valido (numeros) ejemplo numero 9 xd
  async getPokemonApi(id) {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const respoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.poke = await respoke.json();
      this.brian.push(this.poke)
      this.brian.sort(function(prev, next){
        return prev.id - next.id
      })
      

      console.log(this.brian);
    } catch (error) {
      console.log(error);
    }
    
    // for(const objectId of JSON.parse(getFavoritos)) {
    //   if(objectId && objectId.id) {
    //     this.favoritesPokemons.push(this.favoritesPokemons.filter(pokemon => pokemon.id == objectId?.id)[0])
    //   }
    // }
    
  }
  
}
