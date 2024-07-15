package com.unichord.shoeprima.shoeprimaserver.review.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

public class ReviewDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        //      hibernate + JPQL 이용 과정에서 new가 중첩되는 경우에 이용 X
//      private ProductDto.Summary product;
//      대신 아래와 같이 풀어서 이용
        private Long reviewId;
        private Long productId;
        private String modelCode;
        private String productName;
        private Integer price;
        private String color;
        private String productImg;
        private String username;
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
