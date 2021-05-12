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
  tipos: any = [];
  start: number = 1;
  end: number = 21;
  limit: number = 400;

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
   
    this.getPokemonFilter(tipo);
     
    
    console.log("quelo menor qlq askjdhajsdaksd",tipo)
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

  async getPokemonFilter(tipo) {
    
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      
      const restipo = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
      const filterPokemon = await restipo.json();
      this.tipos = filterPokemon
      for (let tipoPokemon = 0; tipoPokemon <this.tipos.pokemon.length; tipoPokemon++) {
          console.log(this.tipos.pokemon[tipoPokemon]         )
          this.getPokemonAsync(this.tipos.pokemon[tipoPokemon].pokemon.name)
      }
      
    } catch (error) {
      console.log(error);
    }
    console.log("ashbdahsdbahsbdasbdabs" ,this.tipos)
  }

  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled =!this.infiniteScroll.disabled;
  }

  loadData(event) {
    console.log('cargando.....', this.pokemons.length);
    if( this.pokemons.length >= this.limit){
      console.log("pokemones max 400", this.limit)
      this.infiniteScroll.disabled = true;
      return;
    } 
    
    //aki tengo que preguntar si la variable limt es igual a el arreglo de pokemones 
      
    for (let idPokemon = this.start; idPokemon < this.end; idPokemon++) {
      this.getPokemonAsync(idPokemon); // fetch de pokemon por id (idPokemon)
      this.start = idPokemon + 1;
      if (this.start >= this.limit) {
        console.log('brak frenate borralo')
        break;
      }
    }
    
    this.end = this.end + 19;
    // this.start = this.start;
    // this.end = this.end;
    event.target.complete();

  
    return;
  }

 
  filterPokemon(type) {
    
    const filterPokemon = this.pokemons.filter(
      (pokemon) => pokemon.types[0].type.name == type
    );
    this.pokemons = filterPokemon;
    
    console.log(this.pokemons)
    
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
