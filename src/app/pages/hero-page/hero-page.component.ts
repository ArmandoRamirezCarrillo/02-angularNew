import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Iron Man');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription(){
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Iron Man');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }

}
