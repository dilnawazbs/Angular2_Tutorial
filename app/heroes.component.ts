import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService, private router: Router){}
  getHeroes():void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }



  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name:string): void {
    name = name.trim();
    if(!name) { return;}
    this.heroService.create(name).then(hero => {this.heroes.push(hero); this.selectedHero=null;});
  }

  delete(hero:Hero): void {
    this.heroService.delete(hero.id).then(() => {this.heroes = this.heroes.filter(h => h !== hero);
    if (this.selectedHero === hero){this.selectedHero = null;}});
  }
}
