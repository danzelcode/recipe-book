import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shoping-list/shopping-list.component";
import {ModuleWithProviders} from "@angular/core";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";

export const APP_ROUTES_PROVIDERS : Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
    {path: 'shopping-list', component: ShoppingListComponent},
];

export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
