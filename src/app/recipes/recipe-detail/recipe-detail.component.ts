import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shoping-list/shopping-list.service";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private recipesService: RecipeService
  ) {}

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete(){
    this.recipesService.deleteRecipes(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
