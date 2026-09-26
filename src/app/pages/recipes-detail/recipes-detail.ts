import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  imports: [],
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css',
})
export class RecipesDetail {
  id = input<string>();

  recipesList = RECIPES_LIST_DATA;

  filterRecipesList = computed(() => {
    return this.recipesList.recipes.filter((x) => x.id === Number(this.id()));
  });
}
