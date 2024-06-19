package com.unichord.shoeprima.shoeprimaserver.product.model;

import lombok.Getter;

@Getter
public enum ProductStatus {

    DISCONTINUED((byte) 0, "판매 중단"),
    PENDING((byte) 1, "보류"),
    ON_SALE((byte) 2, "판매");

    private final byte code;
    private final String description;

    ProductStatus(byte code, String description) {
        this.code = code;
        this.description = description;
    }

    public static ProductStatus fromCodeToStatus(byte code) {
        for (ProductStatus status : ProductStatus.values()) {
            if (status.getCode() == code) {
                return status;
            }
        }
        throw new IllegalArgumentException("Invalid OrderStatus code: " + code);
    }
}
