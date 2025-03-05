import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  // if(characters){
  //   const localStorageObj = JSON.parse(characters);
  // }
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(newCharacter: Character){
    this.characters.update(list => [...list, newCharacter]);
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })
}
