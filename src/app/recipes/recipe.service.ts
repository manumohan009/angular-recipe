import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter(); 

  constructor(private slService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schniitzel - just awesome',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFhg7NMHoniF17TEXJs2kvpa92SZgGJvJzY-vdhamTygQt5dq&s',
      [ 
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFhg7NMHoniF17TEXJs2kvpa92SZgGJvJzY-vdhamTygQt5dq&s',
      [ 
        new Ingredient('Buns', 10),
        new Ingredient('Fish', 2)
      ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

}
