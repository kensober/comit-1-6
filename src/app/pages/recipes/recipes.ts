import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  recipesList = RECIPES_LIST_DATA
}
