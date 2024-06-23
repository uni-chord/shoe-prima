package com.unichord.shoeprima.shoeprimaserver.user.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

public class WishDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long wishId;
        private Long userId;
        private Long productId;

    }

}
