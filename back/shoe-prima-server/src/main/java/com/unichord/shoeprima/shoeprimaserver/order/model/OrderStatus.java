package com.unichord.shoeprima.shoeprimaserver.order.model;

import lombok.Getter;

@Getter
public enum OrderStatus {
    PAYMENT_COMPLETED((byte) 10, "결제 완료"),
    PREPARING((byte) 20, "상품 준비 중"),
    SHIPPING((byte) 30, "배송 중"),
    DELIVERED((byte) 40, "배송 완료"),
    CONFIRMED((byte) 50, "확인"),
    RETURN_REQUESTED((byte) 60, "반품 신청"),
    PICKUP((byte) 61, "수거 중"),
    RETURN_COMPLETED((byte) 62, "반품 완료"),
    CANCELED((byte) 70, "취소 완료");

    private final byte code;
    private final String description;

    OrderStatus(byte code, String description) {
        this.code = code;
        this.description = description;
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