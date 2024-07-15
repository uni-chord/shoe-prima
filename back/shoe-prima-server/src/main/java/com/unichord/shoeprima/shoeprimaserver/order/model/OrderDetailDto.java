    package com.unichord.shoeprima.shoeprimaserver.order.model;

    import lombok.AllArgsConstructor;
    import lombok.Builder;
    import lombok.Data;
    import lombok.Getter;

    import java.time.LocalDateTime;

    public class OrderDetailDto {

        @Data
        @Getter
        @Builder
        @AllArgsConstructor
        public static class Summary {

            private Long id;
            private Long orderId;
            private Long productId;
            private String productName;
            private Integer size;
            private String color;
            private Integer productQnt;
            private Integer priceSum;
            private OrderStatus orderStatus;
            private LocalDateTime createdAt;

        }



    }
