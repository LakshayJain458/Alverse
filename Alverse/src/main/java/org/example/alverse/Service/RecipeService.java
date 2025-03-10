package org.example.alverse.Service;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {
    @Autowired
    private final OllamaChatModel model;

    public RecipeService(OllamaChatModel model) {
        this.model = model;
    }

    public String getRecipe(String ingredients, String cuisine, String dietaryRestrictions) {
        ingredients = (ingredients == null || ingredients.isBlank()) ? "any ingredients" : ingredients;
        cuisine = (cuisine == null || cuisine.isBlank()) ? "any cuisine" : cuisine;
        dietaryRestrictions = (dietaryRestrictions == null || dietaryRestrictions.isBlank()) ? "no dietary restrictions" : dietaryRestrictions;
        final String promptTemplate =
                "You are a world-class chef and recipe creator. Create a detailed recipe using the following ingredients: %s. " +
                        "The recipe should align with %s cuisine and adhere to these dietary restrictions: %s. " +
                        "Ensure the recipe is clear, creative, and includes specific measurements, cooking steps, and tips for the best results.";
        String prompt = String.format(promptTemplate, ingredients, cuisine, dietaryRestrictions);
        return model.call(prompt);
    }


}
