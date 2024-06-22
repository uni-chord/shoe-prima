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

    @Embedded
    private ProductDesc productDesc;

    @Convert(converter = ProductStatusConverter.class)
    @Column(name = "status", nullable = false)
    private ProductStatus productStatus;

    @Column(name = "discount_per", nullable = false)
    private Byte discountPer;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Product(ProductDesc productDesc, ProductStatus productStatus, Byte discountPer) {
        this.productDesc = productDesc;
        this.productStatus = productStatus;
        this.discountPer = discountPer;
    }

    public void changeProductDesc (ProductDesc productDesc) {
        this.productDesc = productDesc;
    }

    public void changeProductStatus(ProductStatus productStatus) {
        this.productStatus = productStatus;
    }

    public void changeDiscountPer(Byte discountPer) { this.discountPer = discountPer; }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
