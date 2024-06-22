package com.unichord.shoeprima.shoeprimaserver.order.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

public class ReturnDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long returnId;
        private Long orderDetailId;
        private String returnCause;
        private String returnNumber;

    }

}
