package com.example.demo.recipe;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Recipe {
    @Id
    @SequenceGenerator(
            name = "recipe_sequence",
            sequenceName = "recipe_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "recipe_sequence"
    )
    private Long id;
    private String name;
    private String description;
    private String ingredients;


    public Recipe() {
    }

    public Recipe(Long id,
                   String name,
                   String ingredients,
                   String description
                   ) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
    }

    public Recipe(String name,
                   String ingredients,
                  String description
                   ) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", ingredients='" + ingredients + '\'' +
                '}';
    }
}
