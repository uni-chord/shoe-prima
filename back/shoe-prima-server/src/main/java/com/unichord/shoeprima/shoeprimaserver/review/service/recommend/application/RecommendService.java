package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.application;

import com.unichord.shoeprima.shoeprimaserver.review.model.Review;
import com.unichord.shoeprima.shoeprimaserver.review.repository.ReviewRepository;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.domain.RecommendedProductResponse;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.DataMatrix;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.DataModel;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.RecommendationResponse;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.Recommender;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class RecommendService {

    private final ProductRepository productRepository;
    private final ReviewRepository reviewRepository;
    private final Recommender recommender;

    public List<RecommendedProductResponse> recommendProducts(String color, String size, Long userId, int pageSize){

        // 특정 색깔 또는 사이즈에 해당하는 상품에 대한 리뷰들을 가져온다.
        List<Review> reviews = reviewRepository.findAllByCategory(color, size);

        // 가져온 리뷰들에 대해서, 유저 아이디, 상품 아이디, 별점을 추출하여, List<DataModel> 을 형성한다.
        List<DataModel> dataModel = reviews.stream()
                .map(rv -> new DataModel(rv.getUser().getUserId(), rv.getProduct().getProductId(), rv.getRatingCnt.doubleValue()))
                .collect(Collectors.toList());

        // 형성한 데이터 모델을 이용하여 추천 알고리즘에 사용할 DataMatrix 객체를 생성한다.
        // 추천 알고리즘을 통해 가져온 추천 리스트를 할당한다.
        List<RecommendationResponse> recommendedItems = recommender.recommend(new DataMatrix(dataModel), userId, 3.0);

        // 상품 정보와 예상 평점을 같이 전송하기 위해, RecommendationResponse 타입을 RecommendedProductsResponse 타입으로 바꿔서 반환해준다.
        return recommendedItems.stream()
                .map(res -> new RecommendedProductResponse(productRepository.findById(res.getItemId())
                        .orElseThrow(() -> new IllegalArgumentException("Product Not Found")), res.getExpectedRating()))
        .limit(pageSize)
                .collect(Collectors.toList());


    }


}
