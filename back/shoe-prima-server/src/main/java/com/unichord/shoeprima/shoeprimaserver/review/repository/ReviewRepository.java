package com.unichord.shoeprima.shoeprimaserver.review.repository;

import com.unichord.shoeprima.shoeprimaserver.review.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    
    
    // 모든 리뷰를 가져오는 메서드
    List<Review> findAll();
    
    // 특정 상품에 대한 모든 리뷰를 가져오는 메서드
    List<Review> findAllByProductId(Long productId);

    // 특정 상품에 대한 모든 리뷰를 생성 날짜를 기준으로 내림차순 형태로 가져오는 메서드
    Page<Review> findAllByProductIdOrderByCreatedAtDesc(Long productId, Pageable pageable);

    // 특정 상품의 평점 평균을 가져오는 메서드
    Double findAverageRatingByProductId(Long productId);

    // 특정 색깔 상품에 대한 모든 리뷰를 가져오는 메서드
    List<Review> findAllByColor(String color);

    // 특정 사이즈 상품에 대한 모든 리뷰를 가져오는 메서드
    List<Review> findAllBySize(String size);

    // 특정 색깔 및 사이즈 상품에 대한 모든 리뷰를 가져오는 메서드.
    List<Review> findAllByCategory(String color, String size);

    // 특정 유저의 모든 리뷰를 가져오는 메서드
    List<Review> findAllByUserId(Long userId);

}
