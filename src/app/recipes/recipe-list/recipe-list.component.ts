import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFhg7NMHoniF17TEXJs2kvpa92SZgGJvJzY-vdhamTygQt5dq&s'),
    new Recipe('Another test recipe', 'This is a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFhg7NMHoniF17TEXJs2kvpa92SZgGJvJzY-vdhamTygQt5dq&s')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
