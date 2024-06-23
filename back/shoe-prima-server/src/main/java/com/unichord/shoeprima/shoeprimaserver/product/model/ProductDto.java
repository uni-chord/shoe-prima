package com.unichord.shoeprima.shoeprimaserver.product.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

public class ProductDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long productId;
        private String modelCode;
        private String name;
        private Integer price;
        private String color;

    }

}
