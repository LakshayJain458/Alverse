package org.example.alverse.Service;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.stereotype.Service;

@Service
public class Textservice {

    private final OllamaChatModel model;
    public Textservice(OllamaChatModel model) {
        this.model = model;
    }

    public String getResponse(String prompt){
        return model.call(prompt);
    }
}
