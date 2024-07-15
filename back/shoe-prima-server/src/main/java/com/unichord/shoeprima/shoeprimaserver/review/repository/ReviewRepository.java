package com.unichord.shoeprima.shoeprimaserver.review.repository;

import com.unichord.shoeprima.shoeprimaserver.review.model.Review;
import com.unichord.shoeprima.shoeprimaserver.review.model.ReviewDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.review.model.ReviewDto.Summary(
            r.id, 
            p.id, 
            p.modelCode, 
            p.name, 
            p.price,
            p.color,
            i.imageUrl, 
            u.name, 
            r.title, 
            r.content, 
            r.ratingCnt, 
            r.createdAt) 
        FROM Review r 
        JOIN User u ON r.userId = u.id
        JOIN Product p ON r.productId = p.id
        Join ProductImage i on r.productId = i.productId
        WHERE r.id = :id
    """)
    Optional<ReviewDto.Summary> findReviewDtoSummaryById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.review.model.ReviewDto.Summary(
            r.id, 
            p.id, 
            p.modelCode, 
            p.name, 
            p.price,
            p.color,
            i.imageUrl, 
            u.name, 
            r.title, 
            r.content, 
            r.ratingCnt, 
            r.createdAt) 
        FROM Review r 
        JOIN User u ON r.userId = u.id
        JOIN Product p ON r.productId = p.id
        Join ProductImage i on r.productId = i.productId
        WHERE r.userId = :userId
    """)
    List<ReviewDto.Summary> findReviewDtoSummaryByUserId(@Param("userId") Long userId);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.review.model.ReviewDto.Summary(
            r.id, 
            p.id, 
            p.modelCode, 
            p.name, 
            p.price,
            p.color,
            i.imageUrl, 
            u.name, 
            r.title, 
            r.content, 
            r.ratingCnt, 
            r.createdAt) 
        FROM Review r 
        JOIN User u ON r.userId = u.id
        JOIN Product p ON r.productId = p.id
        Join ProductImage i on r.productId = i.productId
        WHERE r.productId = :productId
    """)
    List<ReviewDto.Summary> findReviewDtoSummaryByProductId(@Param("productId") Long productId);
}
