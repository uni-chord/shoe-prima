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
    @Column(name = "order_detail_id", nullable = false)
    private Long orderDetailId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "product_qnt", nullable = false)
    private Integer productQnt;

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
    public OrderDetail(Order order, Long productId, Integer productQnt, Integer priceSum, OrderStatus orderStatus) {
        this.order = order;
        this.productId = productId;
        this.productQnt = productQnt;
        this.priceSum = priceSum;
        this.orderStatus = orderStatus;
    }

    public void changeOrder(Order order) {
        this.order = order;
    }

    public void changeProductId(Long productId) {
        this.productId = productId;
    }

    public void changeProductQnt(Integer productQnt) {
        this.productQnt = productQnt;
    }

    public void changePriceSum(Integer priceSum) {
        this.priceSum = priceSum;
    }

    public void changeOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}

