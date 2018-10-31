import { Component, OnInit } from '@angular/core';
import { Anim } from '../anim';
import { ANIMALS } from '../mock-animals';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals = ANIMALS;  
  anim: Anim = {
    id: 1,
    name: 'prueba'
  };

  constructor() { }

  ngOnInit() {
  }

}


