package com.unichord.shoeprima.shoeprimaserver.review.model;

import com.unichord.shoeprima.shoeprimaserver.product.model.ProductDto;
import lombok.*;

import java.time.LocalDateTime;

public class ReviewDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long reviewId;
        private String username;
        private ProductDto.Summary product;
        private String productImg;
        private String title;
        private String content;
        private Byte ratingCnt;
        private LocalDateTime createdAt;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class CreateRequest {

        private Long reviewId;
        private Long userId;
        private Long productId;
        private String title;
        private String content;
        private Byte ratingCnt;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class CreateResponse {

        private Long reviewId;
        private Long userId;
        private Long productId;
        private String title;
        private String content;
        private Byte ratingCnt;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class ModifyRequest {

        private Long reviewId;
        private Long userId;
        private String title;
        private String content;
        private Byte ratingCnt;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class ModifyResponse {

        private Long reviewId;
        private Long userId;
        private Long productId;
        private String title;
        private String content;
        private Byte ratingCnt;

    }

}
