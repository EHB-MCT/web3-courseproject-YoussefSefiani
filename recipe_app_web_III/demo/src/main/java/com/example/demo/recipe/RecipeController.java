package com.example.demo.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/recipe")
//@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }


    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @PostMapping
    @PreAuthorize("hasAuthority('create:items')")
    public void registerNewRecipe(@RequestBody Recipe recipe) {
        System.out.println("hey " + recipe);
        recipeService.addNewRecipe(recipe);
    }

    @DeleteMapping(path = "{recipeId}")
    @PreAuthorize("hasAuthority('delete:items')")
    public void deleteRecipe(@PathVariable("recipeId") Long recipeId) {
        recipeService.deleteRecipe(recipeId);
    }

  /*  @PutMapping(path = "{recipeId}")
    public void updateRecipe(
            @PathVariable("recipeId") Long recipeId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description
    ) {
        recipeService.updateRecipe(recipeId, name, description);
    } */

    @PutMapping(path = "{recipeId}")
    @PreAuthorize("hasAuthority('update:items')")
    public void updateRecipe(
            @PathVariable("recipeId") Long recipeId,
           @RequestBody Recipe recipe
    ) {
        recipeService.updateRecipe(recipeId, recipe);
    }

}
