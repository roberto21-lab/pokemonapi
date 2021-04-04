import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  pokemons = [];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    for (let idPokemon = 1; idPokemon < 200; idPokemon++) {
      this.getNombreAsync(idPokemon);
    }
  }

  async getNombreAsync(poke) {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      const pokemon = await resPokemon.json()
      this.pokemons.push(pokemon)
      this.pokemons.sort(function (prev, next) {
        return prev.id - next.id
        
      })
    

    }
    catch (error) {
      console.log(error);
    }
  };
}

