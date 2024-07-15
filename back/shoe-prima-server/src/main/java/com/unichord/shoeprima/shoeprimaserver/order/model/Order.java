package com.unichord.shoeprima.shoeprimaserver.order.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.common.vo.Address;
import io.hypersistence.utils.hibernate.id.Tsid;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "order")
public class Order implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "user_id")
    private Long userId;

    @Column(name = "order_number", nullable = false)
    private String orderNumber;

    @Column(name = "total_price", nullable = false)
    private Integer totalPrice;

    @Embedded
    private Address address;

    @Column(name = "receiver_name", nullable = false)
    private String receiverName;

    @Column(name = "receiver_phone", nullable = false)
    private String receiverPhone;

    @Column(name = "post_number", nullable = false)
    private String postNumber;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderDetail> orderDetails = new ArrayList<>();

    @Builder
    public Order(Long userId, String orderNumber, int totalPrice, Address address, String receiverName, String receiverPhone, String postNumber) {
        this.userId = userId;
        this.orderNumber = orderNumber;
        this.totalPrice = totalPrice;
        this.address = address;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.postNumber = postNumber;
    }

    public void changeAddress(Address address) {
        this.address = address;
    }

    public void changeReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public void changeReceiverPhone(String receiverPhone) {
        this.receiverPhone = receiverPhone;
    }

    public void changePostNumber(String postNumber) {
        this.postNumber = postNumber;
    }

    public void updateOrder(Address adress, String receiverName, String receiverPhone, String postNumber) {
        this.address = address;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.postNumber = postNumber;
    }

    public void substractRefund(Integer refundAmount) {
        this.totalPrice -= refundAmount;
    }

    @PrePersist
    @Override
    public void onCreate() {
        createdAt = LocalDateTime.now();
    }
}