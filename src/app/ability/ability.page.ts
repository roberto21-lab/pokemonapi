import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ability',
  templateUrl: './ability.page.html',
  styleUrls: ['./ability.page.scss'],
})
export class AbilityPage implements OnInit {
  public folder: string;
  abilitys: [];
  activatedRoute: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAbilityAsync();
  }
  async getAbilityAsync() {
    try {
      // https://pokeapi.co/api/v2/pokemon/1
      const resability = await fetch(`https://pokeapi.co/api/v2/ability`);
      const ability = await resability.json();
     
      this.abilitys = ability.results;
      console.log(this.abilitys)
    } catch (error) {
      console.log(error);
    }
  }

  hability(ability) {
    this.router.navigate(['/folder/pokemones'], {
      queryParams: { hability: ability.name },
    });
  }
}
