import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  id = '';
  @Input() data: any;
  imgPokemon: string = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
  pokemon: [];
  poke = {};
  tipos: [];
  segment: string = 'about';
  btnFavorite: boolean; 

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let favoritos: string = localStorage.getItem('favoritos');
    const arrFavoritos = favoritos?.split(',');
    this.btnFavorite = arrFavoritos?.includes(this.id);
    this.getPokeAsync(this.id);
  }

  favoritos() {
    const getFavoritos = localStorage.getItem('favoritos');
    let newPokemonsToSave = '';
    if (!getFavoritos) {
      // si no hay pokemones favoritos
      newPokemonsToSave = this.id;
      this.btnFavorite = true
    } else {
      // si hay pokemones favoritos
      let concatenando = '[' + getFavoritos + ']';
      console.log(concatenando);
      let arregloIds = JSON.parse(concatenando);
      // si no lo encuentras el elemento guardalo y   si encuetras el elemnto eliminalo
      if (arregloIds.indexOf(parseInt(this.id)) == -1) {
        newPokemonsToSave = getFavoritos + ',' + this.id;
        this.btnFavorite = true
      } else {
        arregloIds.splice(arregloIds.indexOf(parseInt(this.id)), 1);
        console.log(arregloIds);

        newPokemonsToSave = arregloIds.toString();
        console.log(arregloIds.toString());
        this.btnFavorite = false
      }
    }
    localStorage.setItem('favoritos', newPokemonsToSave);
    console.log(this.btnFavorite);
  }

  async getPokeAsync(id) {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const respoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.poke = await respoke.json();

      console.log(this.poke);
    } catch (error) {
      console.log(error);
    }
  }

  selectores(value) {}
}
