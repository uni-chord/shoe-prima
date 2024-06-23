package com.unichord.shoeprima.shoeprimaserver.product.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

public class ProductImageDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long productId;
        private String imageUrl;

    }

}
