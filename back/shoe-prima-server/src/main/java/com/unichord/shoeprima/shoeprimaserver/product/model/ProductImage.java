package com.unichord.shoeprima.shoeprimaserver.product.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
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
@Table(name = "product_image")
public class ProductImage implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id", nullable = false)
    private Long id;

    @JoinColumn(name = "product_id")
    private Long productId;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public ProductImage(Long productId, String imageUrl) {
        this.productId = productId;
        this.imageUrl = imageUrl;
    }

    public void changeImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}