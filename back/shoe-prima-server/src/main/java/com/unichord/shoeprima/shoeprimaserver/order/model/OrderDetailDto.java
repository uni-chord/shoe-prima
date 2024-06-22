package com.unichord.shoeprima.shoeprimaserver.order.model;

import com.unichord.shoeprima.shoeprimaserver.common.vo.FootSize;
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

        private String productName;
        private FootSize size;
        private String color;
        private Integer productQnt;
        private Integer priceSum;
        private OrderStatus orderStatus;
        private LocalDateTime createdAt;

    }



}
