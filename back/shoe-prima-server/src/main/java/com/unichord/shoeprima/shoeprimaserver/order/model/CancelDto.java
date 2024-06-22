package com.unichord.shoeprima.shoeprimaserver.order.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

public class CancelDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long cancelId;
        private Long orderDetailId;
        private String cancelCause;

    }

}
