import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //create a property to represent the HEROES data imported from the mock-heroes file
  heroes: Hero[] = [];

  //constructor shouldn't do anything- just wire constructor parameters to properties
  constructor(private heroService: HeroService) { }
  
  //get the heroes when the component loads
  ngOnInit(): void {
    this.getHeroes();
  }
  
  //function to retrieve the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // if given name isn't blank, handles creates object based on hero's name
  // handler passes obj name to addHero method

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  //needs to update its own list of heroes even though the heroService is deleting it on the server
  //Must subscribe to the Observable even if it doesn't return anything
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
