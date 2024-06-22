package com.unichord.shoeprima.shoeprimaserver.inventory.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.common.vo.FootSize;
import com.unichord.shoeprima.shoeprimaserver.product.model.Product;
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
    @Column(name = "inventory_id", nullable = false)
    private Long inventoryId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Embedded
    @Column(name = "product_size", nullable = false)
    private FootSize size;

    @Column(name = "product_qnt", nullable = false)
    private Integer productQnt;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Inventory(Product product, FootSize size, Integer productQnt) {
        this.product = product;
        this.size = size;
        this.productQnt = productQnt;
    }

    public void changeProduct(Product product) {
        this.product = product;
    }

    public void changeSize(FootSize size) {
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