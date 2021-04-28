import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


//poke.id nombre del ngif xD
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  id = '';
  @Input() data: any;
  imgPokemon: string = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  
    this.id = this.route.snapshot.paramMap.get('id');
    this.imgPokemon = `https://pokeres.bastionbot.org/images/pokemon/${this.data.id}.png`;
  }

  addFovorite(id) {
    const getFavorites = localStorage.getItem('favorites');
    const arregloDePokeIdsConvertidoEnString: string = getFavorites + ',' + JSON.stringify({id});
    localStorage.setItem('favorites', arregloDePokeIdsConvertidoEnString);
  }
  go(id) {
    this.router.navigate(['pokemon', id]);
  }
  
}

