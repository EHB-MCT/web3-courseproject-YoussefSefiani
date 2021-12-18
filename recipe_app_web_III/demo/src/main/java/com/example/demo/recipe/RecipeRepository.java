package com.example.demo.recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipeRepository
        extends JpaRepository<Recipe, Long> {

    @Query("SELECT s FROM Recipe s WHERE s.name = ?1")
    Optional<Recipe> findRecipeByName(String name);

}
