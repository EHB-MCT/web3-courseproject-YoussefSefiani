import { Recipe } from './../../models/recipe';
import { RecipeService } from './../../services/recipe/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  name!: string;
  ingredients!: string;
  description!: string;

  recipe: Recipe = {
    name: '',
    ingredients: '',
    description: '',
  };

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.recipe.name = this.name;
    this.recipe.ingredients = this.ingredients;
    this.recipe.description = this.description;
    this.recipeService.addRecipe(this.recipe);
  }
}
