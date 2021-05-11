import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  pokemons: any[] = [];
  type = '';
  start: number = 1;
  end: number = 21;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private Platform: Platform
  ) {
    // this.Platform.ready().then(() => {
    //   this.i++;
    //   this.pokemons.push(this.i.toString());
    // });
  }

  // this.Platform.ready().then(()=> {
  //   for(let idPokemon = 1;idPokemon<20;idPokemon++ ){
  //  this.getPokemonAsync(idPokemon);

  //   }
  //   if (tipo) {
  //     setTimeout(() => this.filterPokemon(tipo), 3000);
  //   }
  //   if (hability) {
  //     setTimeout(() => this.filterHability(hability), 3000);
  //   }
  // })

  ngOnInit() {
    let tipo = this.activatedRoute.snapshot.queryParams['tipo']; // aqui obtengo el valor del queryparams "tipo"
    let hability = this.activatedRoute.snapshot.queryParams['hability'];
    // let favorites = this.activatedRoute.snapshot.queryParams['favorites'];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    for (let idPokemon = this.start; idPokemon < this.end; idPokemon++) {
      this.getPokemonAsync(idPokemon); // fetch de pokemon por id (idPokemon)
      this.start = idPokemon + 1;
      
    }
    
    this.end = this.end + 20;

    if (tipo) {
      setTimeout(() => this.filterPokemon(tipo), 3000);
    }
    if (hability) {
      setTimeout(() => this.filterHability(hability), 3000);
    }
  }

  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  loadData(event) {
    console.log('cargando.....');
    
    for (let idPokemon = this.start; idPokemon < this.end; idPokemon++) {
      this.getPokemonAsync(idPokemon); // fetch de pokemon por id (idPokemon)
      this.start = idPokemon + 1;
    }
    
    this.end = this.end + 19;
    // this.start = this.start;
    // this.end = this.end;
    event.target.complete();
    // this.infiniteScroll.disabled = true;
    return;


    // setTimeout(() => {   
    //   if (this.pokemons.length > 1000) {
      

    //   }
    //  const nuevoArr = Array(20);
    //  this.pokemons.push(...nuevoArr);
    //  event.target.complete();
    // }, 1000);
    
    
    
    // setTimeout(() => {

      
    //   // final
    //   event.target.complete();
    //   this.infiniteScroll.disabled = true;
    //   return;
    // }, 1000)
  }

  // if(favorites){
  //   setTimeout(() => this.favoritePokemos(), 3000);
  // }

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
    const filterPokemon = this.pokemons.filter(
      (pokemon) => pokemon.types[0].type.name == type
    );
    this.pokemons = filterPokemon;
  }

  filterHability(hability) {
    console.log(this.pokemons);
    const filterHability = this.pokemons.filter(
      (pokemon) => pokemon.abilities[0].ability.name == hability
    );
    console.log(filterHability);
    this.pokemons = filterHability;
  }

  async getPokemonAsync(poke) {
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
