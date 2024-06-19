package com.unichord.shoeprima.shoeprimaserver.review.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import com.unichord.shoeprima.shoeprimaserver.product.model.Product;
import com.unichord.shoeprima.shoeprimaserver.user.model.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "review")
public class Review implements OnCreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", nullable = false)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "rating_cnt", nullable = false)
    private Byte ratingCnt;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "is_active", nullable = false, columnDefinition = "TINYINT(1)")
    private Boolean isActive;

    @Builder
    public Review(User user, Product product, String title, String content, Byte ratingCnt, Boolean isActive) {
        this.user = user;
        this.product = product;
        this.title = title;
        this.content = content;
        this.ratingCnt = ratingCnt;
        this.isActive = isActive;
    }

    public void changeTitle(String title) {
        this.title = title;
    }

    public void changeContent(String content) {
        this.content = content;
    }

    public void changeRatingCnt(Byte ratingCnt) {
        this.ratingCnt = ratingCnt;
    }

    public void activate() {
        this.isActive = true;
    }

    public void deactivate() {
        this.isActive = false;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}