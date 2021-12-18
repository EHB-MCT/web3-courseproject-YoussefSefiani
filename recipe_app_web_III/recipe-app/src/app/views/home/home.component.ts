import { RecipeService } from './../../services/recipe/recipe.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  loaded: boolean = false;
  editMode: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      console.log('heree');
      this.recipes = recipes;
      console.log(this.recipes);
      this.loaded = true;
    });
  }

  onDelete($event: any) {
    let recipeId = parseInt($event.path[0].id);
    this.recipeService.deleteRecipe(recipeId);
  }

  toEditMode() {
    if (this.editMode) {
      this.editMode = false;
      return;
    }
    this.editMode = true;
  }

  confirmEditMode(recipe: Recipe) {
    let { id } = recipe;
    let recipeWithoutId = {
      name: recipe.name,
      ingredients: recipe.ingredients,
      description: recipe.description,
    };
    this.recipeService.editRecipe(id, recipeWithoutId);
  }
}
