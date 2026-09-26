import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Recipes } from './pages/recipes/recipes';
import { RecipesList } from './pages/recipe-list/recipe-list';
import { RecipesDetails } from './pages/recipes-details/recipes-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  { path: 'recipes', component: Recipes },
  { path: 'recipe-list', component: RecipesList },
  { path: 'recipes-details/:id', component: RecipesDetails },
  { path: '**', redirectTo: 'home' }
];
