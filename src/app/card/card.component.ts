import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
 
 

  @Input() data: any;
  imgPokemon: string = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
  constructor(private router: Router) { }

  ngOnInit() {
    this.imgPokemon = `https://pokeres.bastionbot.org/images/pokemon/${this.data.id}.png`
   
  }
  gocard() {
    this.router.navigate(['/card']);

}
}
