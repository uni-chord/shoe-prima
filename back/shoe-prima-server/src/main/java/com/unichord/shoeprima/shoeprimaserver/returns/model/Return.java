package com.unichord.shoeprima.shoeprimaserver.returns.model;

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
@Table(name = "return")
public class Return implements OnCreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "return_id", nullable = false)
    private Long id;

    @JoinColumn(name = "order_detail_id", nullable = false)
    private Long orderDetailId;

    @Column(name = "return_cause", nullable = false)
    private String returnCause;

    @Column(name = "return_number", nullable = false)
    private String returnNumber;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Return(Long orderDetailId, String returnCause, String returnNumber) {
        this.orderDetailId = orderDetailId;
        this.returnCause = returnCause;
        this.returnNumber = returnNumber;
    }

    public void changeReturnCause(String returnCause) {
        this.returnCause = returnCause;
    }

    public void changeReturnNumber(String returnNumber) {
        this.returnNumber = returnNumber;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
