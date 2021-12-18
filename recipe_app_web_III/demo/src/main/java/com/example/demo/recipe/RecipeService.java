package com.example.demo.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLOutput;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
}

    public void addNewRecipe(Recipe recipe) {
        Optional<Recipe> recipeOptional = recipeRepository
        .findRecipeByName(recipe.getName());
        if(recipeOptional.isPresent()) {
            throw new IllegalStateException("name taken");
        }
        recipeRepository.save(recipe);
        System.out.println(recipe);

    }

    public void deleteRecipe(Long  recipeId) {
       boolean exists = recipeRepository.existsById(recipeId);

       if(!exists) {
           throw new IllegalStateException("recipe with id " + recipeId + " does not exists");
       }
       recipeRepository.deleteById(recipeId);
    }

    @Transactional
    public void updateRecipe(Long recipeId ,Recipe newRecipe) {
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new IllegalStateException(
                        "recipe with id " + recipeId + "does not exist"
                ));

        String description = newRecipe.getDescription();
        String name = newRecipe.getName();
        String ingredients = newRecipe.getIngredients();

        if(description != null && description.length() > 0 && !Objects.equals(recipe.getDescription(), description)) {
            recipe.setDescription(description);
        }

        if(ingredients != null && ingredients.length() > 0 && !Objects.equals(recipe.getIngredients(), ingredients)) {
            recipe.setDescription(ingredients);
        }

        if(name != null && name.length() > 0 && !Objects.equals(recipe.getName(), name)) {
            Optional<Recipe> recipeOptional = recipeRepository
                    .findRecipeByName(name);
            if(recipeOptional.isPresent()) {
                throw new IllegalStateException("name taken");
            }

            recipe.setName(name);
        }
    }
}
