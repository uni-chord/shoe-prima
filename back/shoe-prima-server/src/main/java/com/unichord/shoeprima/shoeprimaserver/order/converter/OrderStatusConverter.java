package com.unichord.shoeprima.shoeprimaserver.order.converter;

import com.unichord.shoeprima.shoeprimaserver.order.model.OrderStatus;
import jakarta.persistence.AttributeConverter;

public class OrderStatusConverter implements AttributeConverter<OrderStatus, Byte> {


    @Override
    public Byte convertToDatabaseColumn(OrderStatus attribute) {
        return attribute.getCode();
    }

    @Override
    public OrderStatus convertToEntityAttribute(Byte dbData) {
        return OrderStatus.fromCodeToStatus(dbData);
    }
}
