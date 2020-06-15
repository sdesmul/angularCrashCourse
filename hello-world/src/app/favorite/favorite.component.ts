import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  //isSelected: boolean; 
  //isFavorite: boolean;


  //input is a decorator for making fields and properties
  //as input properties
  @Input()isSelected: boolean;

  //how to create an alias
  //benefit of alias is that it keeps the contract of a
  //component stable so renaming will not negatively impact anything
  @Input('is-favorite')isFavorite: boolean;

  //notifies when something happens
  //@Output() change = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //this.isFavorite = !this.isFavorite;
    
    this.isSelected = !this.isSelected;
  }
}
