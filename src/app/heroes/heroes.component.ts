import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //create a property to represent the HEROES data imported from the mock-heroes file
  heroes = HEROES;

  //?: means selectedHero is of type Hero if it exists
  selectedHero?: Hero;

  //assigns clicked hero from template to selectedHero property above
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
