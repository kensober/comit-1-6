import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {
  recipesList = RECIPES_LIST_DATA;

  filterType = '';
  _name = '';
  _difficulty = '';
  _recipesListFilter = this.recipesList.recipes;

  private readonly router = inject(Router);

  viewDetails(id: number): void {
    this.router.navigate(['recipes-detail', id]);
  }

  filterRecipesList(): void {
    if (this.filterType === 'NAME') {
      this.filterRecipesListByName();
    } else if (this.filterType === 'DIFFICULTY') {
      this.filterRecipesListByDifficulty();
    } else {
      this._recipesListFilter = this.recipesList.recipes;
    }
  }

  filterRecipesListByName(): void {
    this._recipesListFilter = this.recipesList.recipes.filter((x) =>
      x.name.toLowerCase().includes(this._name.toLowerCase()),
    );
  }

  filterRecipesListByDifficulty(): void {
    this._recipesListFilter = this.recipesList.recipes.filter((x) =>
      x.difficulty.toLowerCase().includes(this._difficulty.toLowerCase()),
    );
  }
  get canFilter(): boolean {
    if (this.filterType === 'NAME') return this._name.trim().length > 0;
    if (this.filterType === 'DIFFICULTY') return this._difficulty.trim().length > 0;
    return false;
  }

  filterRecipesListExternal(): void {
    this.router.navigate(['recipes-detail-v2'], {
      queryParams: this.filterType === 'NAME'
        ? { name: this._name }
        : { difficulty: this._difficulty },
    });
  }
}
