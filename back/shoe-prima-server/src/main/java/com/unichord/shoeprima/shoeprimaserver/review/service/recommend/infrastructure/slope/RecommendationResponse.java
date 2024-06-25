package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
public class RecommendationResponse {

    private Long itemId;

    private double expectedPreference;

    @Builder
    public RecommendationResponse(Long itemId, double expectedPreference){
        this.itemId = itemId;
        this.expectedPreference = expectedPreference;
    }

}
