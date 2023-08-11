import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {


 private recipes: Recipe[] = [
  new Recipe(
    'tasty Schitzel',
  'A super-tasty Schnitzel - just awesome',
  'https://www.washingtonpost.com/resizer/yDOe4WHPk6n6yZPrqMiTsZIhMEo=/arc-anglerfish-washpost-prod-washpost/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg',
  [
    new Ingredient('Meat', 2),
    new Ingredient(' French Fries', 20) 
  ]),
  new Recipe('Big Fat Burger',
   'What else you need to say',
   'https://www.washingtonpost.com/resizer/yDOe4WHPk6n6yZPrqMiTsZIhMEo=/arc-anglerfish-washpost-prod-washpost/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg',
   [
    new Ingredient('Buns' ,2),
    new Ingredient ('Meat', 2)
   ])
];

constructor(private slService: ShoppingListService){

}

getRecipes(){
    return this.recipes.slice();
}

getRecipe(index: number){
  return this.recipes[index];

}

addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
}
}  