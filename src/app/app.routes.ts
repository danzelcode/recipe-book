import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shoping-list/shopping-list.component";
import {ModuleWithProviders} from "@angular/core";

export const APP_ROUTES_PROVIDERS : Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent},

];

export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
