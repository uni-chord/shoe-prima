package com.unichord.shoeprima.shoeprimaserver.product.converter;

import com.unichord.shoeprima.shoeprimaserver.product.model.ProductStatus;
import jakarta.persistence.AttributeConverter;

public class ProductStatusConverter implements AttributeConverter<ProductStatus, Byte> {

    @Override
    public Byte convertToDatabaseColumn(ProductStatus attribute) {
        return attribute.getCode();
    }

    @Override
    public ProductStatus convertToEntityAttribute(Byte dbData) {
        return ProductStatus.fromCodeToStatus(dbData);
    }
}
