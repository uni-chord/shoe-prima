package com.unichord.shoeprima.shoeprimaserver.order.model;

import com.unichord.shoeprima.shoeprimaserver.common.vo.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long orderId;
        private String orderNumber;
        private String postNumber;
        private Integer totalPrice;
        private LocalDateTime createdAt;
        private List<OrderDetailDto.Summary> orderDetailDtoList;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class CreateRequest {

        Integer totalPrice;
        String receiverName;
        String receiverPhone;
        Address address;
        Boolean isSetDefaultAddress;
        List<OrderDetailDto> orderDetailDtoList;

    }

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class CreateResponse {

        List<OrderDetailDto> orderDetailDtoList;
        Integer totalPrice;

    }

}
