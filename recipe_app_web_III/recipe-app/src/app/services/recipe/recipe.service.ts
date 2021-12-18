import { Recipe } from './../../models/recipe';
import { Injectable, ApplicationRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import getUrl from '../../functions/getUrl';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(getUrl('api/recipe'));
  }

  addRecipe(recipe: Recipe): Object {
    return this.http
      .post<Recipe>(getUrl('api/recipe'), recipe, this.httpOptions)
      .subscribe((res) => console.log(res));
  }

  deleteRecipe(recipeId: number) {
    return this.http
      .delete(getUrl(`api/recipe/${recipeId}`))
      .subscribe((res) => console.log(res));
  }

  editRecipe(recipeId: number | undefined, recipe: Recipe) {
    return this.http
      .put(getUrl(`api/recipe/${recipeId}`), recipe, this.httpOptions)
      .subscribe((res) => console.log(res));
  }
}
