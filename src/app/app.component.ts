import {Component} from "@angular/core";
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListService} from "./shoping-list/shopping-list.service";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService],

})
export class AppComponent {

}
