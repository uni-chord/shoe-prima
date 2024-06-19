package com.unichord.shoeprima.shoeprimaserver.product.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.product.converter.ProductStatusConverter;
import io.hypersistence.utils.hibernate.id.Tsid;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Product")
public class Product implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "model_code", nullable = false)
    private String modelCode;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "is_active", nullable = false)
    private Byte isActive;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "discount_per", nullable = false)
    private Byte discountPer;

    @Convert(converter = ProductStatusConverter.class)
    @Column(name = "status", nullable = false)
    private ProductStatus productStatus;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Product(String modelCode, String name, Integer price, Byte isActive, String color, Byte discountPer, ProductStatus productStatus) {
        this.modelCode = modelCode;
        this.name = name;
        this.price = price;
        this.isActive = isActive;
        this.color = color;
        this.discountPer = discountPer;
        this.productStatus = productStatus;
    }

    public void changeModelCode(String modelCode) {
        this.modelCode = modelCode;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changePrice(Integer price) {
        this.price = price;
    }

    public void changeIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    public void changeColor(String color) {
        this.color = color;
    }

    public void changeDiscountPer(Byte discountPer) {
        this.discountPer = discountPer;
    }

    public void changeProductStatus(ProductStatus productStatus) {
        this.productStatus = productStatus;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
