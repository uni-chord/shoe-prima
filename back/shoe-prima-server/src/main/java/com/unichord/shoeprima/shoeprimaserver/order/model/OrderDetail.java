package com.unichord.shoeprima.shoeprimaserver.order.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.order.converter.OrderStatusConverter;
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
@Table(name = "order_detail")
public class OrderDetail implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id", nullable = false)
    private Long id;

    @JoinColumn(name = "order_id", nullable = false)
    private Long orderId;

    @JoinColumn(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "product_qnt", nullable = false)
    private Integer productQnt;

    @Embedded
    @Column(name = "product_size", nullable = false)
    private Integer productSize;

    @Column(name = "price_sum", nullable = false)
    private Integer priceSum;

    @Convert(converter = OrderStatusConverter.class)
    @Column(name = "order_status", nullable = false)
    private OrderStatus orderStatus;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Builder
    public OrderDetail(Long id, Long orderId, Long productId, Integer productQnt, Integer productSize, Integer priceSum, OrderStatus orderStatus) {
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.productQnt = productQnt;
        this.productSize = productSize;
        this.priceSum = priceSum;
        this.orderStatus = orderStatus;
    }

    public void changeProductQnt(Integer productQnt) {
        this.productQnt = productQnt;
    }

    public void changePriceSum(Integer priceSum) {
        this.priceSum = priceSum;
    }

    public void changeOrderStatus(OrderStatus orderStatus) {
        if (!this.orderStatus.isProcessing()) {
            throw new IllegalStateException("Cannot change status of cancelled order");
        }
        this.orderStatus = orderStatus;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
