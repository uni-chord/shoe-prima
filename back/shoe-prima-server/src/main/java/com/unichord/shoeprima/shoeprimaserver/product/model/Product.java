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
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Product")
public class Product implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "model_code", nullable = false)
    private String modelCode;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "color", nullable = false)
    private String color;

    @Convert(converter = ProductStatusConverter.class)
    @Column(name = "status", nullable = false)
    private ProductStatus productStatus;

    @Column(name = "discount_per", nullable = false)
    private Byte discountPer;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductImage> images = new ArrayList<>();

    @Builder
    public Product(String modelCode, String name, Integer price, String color, ProductStatus productStatus, Byte discountPer) {
        this.modelCode = modelCode;
        this.name = name;
        this.price = price;
        this.color = color;
        this.productStatus = productStatus;
        this.discountPer = discountPer;
    }

    public void changeProductDesc(String modelCode, String name, Integer price, String color) {
        this.modelCode = modelCode;
        this.name = name;
        this.price = price;
        this.color = color;
    }

    public void changeProductStatus(ProductStatus productStatus) {
        this.productStatus = productStatus;
    }

    public void changeDiscountPer(Byte discountPer) {
        this.discountPer = discountPer;
    }

    public void addImage(ProductImage image) {
        this.images.add(image);
    }

    public void removeImage(ProductImage image) {
        this.images.remove(image);
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
