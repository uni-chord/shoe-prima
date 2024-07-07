package com.unichord.shoeprima.shoeprimaserver.order.model;

import lombok.Getter;

@Getter
public enum OrderStatus {
    PAYMENT_COMPLETED((byte) 10, "결제 완료", true),
    PREPARING((byte) 20, "상품 준비 중", true),
    SHIPPING((byte) 30, "배송 중", true),
    DELIVERED((byte) 40, "배송 완료", true),
    CONFIRMED((byte) 50, "확인", false),
    RETURN_REQUESTED((byte) 60, "반품 신청", true),
    PICKUP((byte) 61, "수거 중", false),
    RETURN_COMPLETED((byte) 62, "반품 완료", false),
    CANCELED((byte) 70, "취소 완료", false);

    private final byte code;
    private final String description;
    private final boolean isProcessing;

    OrderStatus(byte code, String description, boolean isProcessing) {
        this.code = code;
        this.description = description;
        this.isProcessing = isProcessing;
    }

    public static OrderStatus fromCodeToStatus(byte code) {
        for (OrderStatus status : OrderStatus.values()) {
            if (status.getCode() == code) {
                return status;
            }
        }
        throw new IllegalArgumentException("Invalid OrderStatus code: " + code);
    }
}