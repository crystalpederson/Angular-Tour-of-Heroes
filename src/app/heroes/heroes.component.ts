import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //create a property to represent the HEROES data imported from the mock-heroes file
  heroes: Hero[] = [];

  //?: means selectedHero is of type Hero if it exists
  selectedHero?: Hero;

  //constructor shouldn't do anything- just wire constructor parameters to properties
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  //get the heroes when the component loads
  ngOnInit(): void {
    this.getHeroes();
  }
  
  //assigns clicked hero from template to selectedHero property above
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  //function to retrieve the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
