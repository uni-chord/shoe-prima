package com.unichord.shoeprima.shoeprimaserver.product.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Product")
public class ProductDesc {

    @Column(name = "model_code", nullable = false)
    private String modelCode;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "color", nullable = false)
    private String color;

}
