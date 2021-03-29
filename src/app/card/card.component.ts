import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any;
  imgPokemon: string = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
  constructor() { }

  ngOnInit() {
    this.imgPokemon = `https://pokeres.bastionbot.org/images/pokemon/${this.data.id}.png`
  }

}
