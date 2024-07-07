package com.unichord.shoeprima.shoeprimaserver.inventory.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

public class InventoryDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {
        private Long id;
        private Long productId;
        private Integer size;
        private Integer productQnt;
        private LocalDateTime createdAt;
    }
}
