package org.example.alverse.Controller;

import org.example.alverse.Service.ImageService;
import org.example.alverse.Service.RecipeService;
import org.example.alverse.Service.Textservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin
public class controller {
    @Autowired
    private Textservice service;
    @Autowired
    private ImageService imageService;

    @Autowired
    private RecipeService recipeService;

    @GetMapping("get")
    public String getMessage(@RequestParam String prompt) {
        return service.getResponse(prompt);
    }

    @GetMapping(value = "Image", produces = "image/png")
    public byte[] getImage(@RequestParam String prompt) throws IOException {
        return imageService.getImage(prompt);
    }

    @GetMapping("/recipe")
    public String generateRecipe(
            @RequestParam(required = false) String ingredients,
            @RequestParam(required = false) String cuisine,
            @RequestParam(required = false) String dietaryRestrictions) {
        return recipeService.getRecipe(ingredients, cuisine, dietaryRestrictions);
    }



}
