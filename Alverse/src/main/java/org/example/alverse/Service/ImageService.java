package org.example.alverse.Service;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.stabilityai.StabilityAiImageModel;
import org.springframework.ai.stabilityai.api.StabilityAiImageOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Base64;

@Service
public class ImageService {
    @Autowired
    private StabilityAiImageModel stabilityAiImageModel;

    public byte[] getImage(String prompt) throws IOException {
        ImageResponse response = stabilityAiImageModel.call(
                new ImagePrompt(prompt,
                        StabilityAiImageOptions.builder()
                                .withStylePreset("cinematic")
                                .withN(1)
                                .withHeight(512)
                                .withWidth(512).build())
        );
        String base64Image = response.getResult().getOutput().getB64Json();
        return Base64.getDecoder().decode(base64Image);
    }
}

