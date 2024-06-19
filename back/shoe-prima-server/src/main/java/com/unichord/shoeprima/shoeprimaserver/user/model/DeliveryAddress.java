package com.unichord.shoeprima.shoeprimaserver.user.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.common.vo.Address;
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
@Table(name = "delivery_address")
public class DeliveryAddress implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "address_id", nullable = false)
    private Long addressId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Embedded
    private Address address;

    @Column(name = "is_default", nullable = false)
    private Byte isDefault;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public DeliveryAddress(User user, Address address, Byte isDefault) {
        this.user = user;
        this.address = address;
        this.isDefault = isDefault;
    }

    public void changeAddress(Address adress) {
        this.address = adress;
    }

    public void changeAddressStatus(Byte isDefault) {
        this.isDefault = isDefault;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}