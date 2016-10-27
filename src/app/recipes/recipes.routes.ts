import {Route} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const RECIPE_ROUTES: Route = [
  {path: '', component: RecipeStartComponent},
  {path: 'new', component: RecipeStartComponent},
  {path: ':id', component: RecipeStartComponent},
  {path: ':id/edit', component: RecipeEditComponent}
];
