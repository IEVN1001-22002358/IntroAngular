import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {

imageWidth:number=40;
imageMargin:number=42;
muestraImage:boolean=true;
listfilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage;
}

  heroes:IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Piccolo',
    description:'Personaje',
    race:'Namek',
    ki:500000
    },
     {
    imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
    nombre:'Vegeta',
    description:'Personaje base',
    race:'Saiyan',
    ki: 19.84
    },
     {
    imagen:'https://dragonball-api.com/characters/Freezer.webp',
    nombre:'Freezer',
    description:'Villano',
    race:'Frieza',
    ki: 52.71
    },
     {
    imagen:'https://dragonball-api.com/characters/celula.webp',
    nombre:'Celula',
    description:'Villano',
    race:'Android',
    ki: 5000
    }
  ]
}
