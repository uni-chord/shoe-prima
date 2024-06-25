package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.application;

import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.domain.RecommendedProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recommend")
@RequiredArgsConstructor
public class RecommendController {

    RecommendService recommendService;

    @GetMapping
    public ResponseEntity<List<RecommendedProductResponse>> getRecommendedProducts(
            @RequestParam String color,
            @RequestParam String size,
            @RequestParam Long userId,
            @RequestParam int pageSize){

        List<RecommendedProductResponse> recommendations = recommendService.recommendProducts(color, size, userId, pageSize);

        return ResponseEntity.ok(recommendations);

    }

}
