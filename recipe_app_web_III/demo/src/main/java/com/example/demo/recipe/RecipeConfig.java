package com.example.demo.recipe;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class RecipeConfig {

    @Bean
    CommandLineRunner commandLineRunner(RecipeRepository repository) {
        return args -> {
      Recipe pasta =   new Recipe(
                "Pasta",
                "Pasta, tomato sauce, cheese",
                "Nice pasta with cheese"

            );
            Recipe eggs =   new Recipe(
                    "Eggs with cheese",
                    "eggs, cheese, salt, pepper",
                    "Nice eggs with cheese"

            );
    repository.saveAll(
            List.of(pasta, eggs)
    );
        };
    }

}
