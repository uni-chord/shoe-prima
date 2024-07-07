package com.unichord.shoeprima.shoeprimaserver.cancel.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

public class CancelDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long id;
        private Long orderDetailId;
        private String cancelCause;
        private LocalDateTime createdAt;

    }

}
