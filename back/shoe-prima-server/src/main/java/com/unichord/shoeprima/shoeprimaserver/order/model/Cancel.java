package com.unichord.shoeprima.shoeprimaserver.order.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cancel")
public class Cancel implements OnCreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cancel_id", nullable = false)
    private Long cancelId;

    @ManyToOne
    @JoinColumn(name = "order_detail_id", nullable = false)
    private OrderDetail orderDetail;

    @Column(name = "cancel_cause", nullable = false)
    private String cancelCause;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Cancel(OrderDetail orderDetail, String cancelCause) {
        this.orderDetail = orderDetail;
        this.cancelCause = cancelCause;
    }

    public void changeOrderDetail(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
    }

    public void changeCancelCause(String cancelCause) {
        this.cancelCause = cancelCause;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}