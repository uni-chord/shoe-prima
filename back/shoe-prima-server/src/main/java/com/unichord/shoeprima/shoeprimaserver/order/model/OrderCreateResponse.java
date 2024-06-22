package com.unichord.shoeprima.shoeprimaserver.order.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderCreateResponse {

    List<OrderDetailDto> orderDetailDtoList;
    Integer totalPrice;

}
