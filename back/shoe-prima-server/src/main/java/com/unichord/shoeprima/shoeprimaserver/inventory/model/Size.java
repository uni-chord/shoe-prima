package com.unichord.shoeprima.shoeprimaserver.inventory.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Size")
public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "size_id", nullable = false)
    private Byte sizeId;

    @Column(name = "size_value", nullable = false)
    private String sizeValue;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}
