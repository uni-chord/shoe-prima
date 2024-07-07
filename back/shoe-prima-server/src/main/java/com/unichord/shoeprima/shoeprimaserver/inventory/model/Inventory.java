package com.unichord.shoeprima.shoeprimaserver.inventory.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import io.hypersistence.utils.hibernate.id.Tsid;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Inventory")
public class Inventory implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id", nullable = false)
    private Long id;

    @JoinColumn(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "product_size", nullable = false)
    private Integer size;

    @Column(name = "product_qnt", nullable = false)
    private Integer productQnt;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Inventory(Long productId, Integer size, Integer productQnt) {
        this.productId = productId;
        this.size = size;
        this.productQnt = productQnt;
    }

    public void changeProduct(Long productId) {
        this.productId = productId;
    }

    public void changeSize(Integer size) {
        this.size = size;
    }

    public void changeProductQnt(Integer productQnt) {
        this.productQnt = productQnt;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}