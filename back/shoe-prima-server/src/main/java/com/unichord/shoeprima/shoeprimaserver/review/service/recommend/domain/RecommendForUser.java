package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.domain;

import com.unichord.shoeprima.shoeprimaserver.review.model.Review;
import com.unichord.shoeprima.shoeprimaserver.review.repository.ReviewRepository;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.DataMatrix;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.DataModel;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.RecommendationResponse;
import com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope.Recommender;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

// final 혹은 @NonNull이 붙은 필드값만을 파라미터로 받는 생성자를 자동으로 만들어주는 어노테이션이다.
@RequiredArgsConstructor
public class RecommendForUser{

    private final ProductRepository productRepository;
    // getById() : product id를 통해서 product 데이터를 가져오는 메서드 필요.
    // findProductsForUser(userId, Pageable.ofSize(pageSize), color, size)
    // findProductsForUser(userId, Pageable.ofSize(pageSize))
        // 색깔과 사이즈에 따른 상품 데이터를 가져오는 메서드와
        // 색깔과 사이즈 상관 없이 상품 데이터를 가져오는 메서드가 필요.

    private final ReviewRepository reviewRepository;
    // findAll(), findAllByColor(), findAllBySize(), findAllByCategory()
    // 전체 상품, 특정 색깔 상품, 특정 사이즈 상품, 특정 색깔과 사이즈 상품을 가져오는 메서드 필요.

    private final Recommender recommender;


    public List<RecommendedProductResponse> recommend(String color, String size, Long userId, int pageSize){

        List<Review> reviews;

        // 색깔 또는 사이즈에 따라서 추천 알고리즘에 활용할 review 데이터를 가져오는 부분.
        if(color == null && size == null){
            // 매개변수로 색깔 또는 사이즈에 대한 정보가 주어지지 않았다면, 모든 상품을 대상으로 추천 알고리즘을 적용할 것이다.
            reviews = reviewRepository.findAll();
        }else if(color != null && size == null){
            // color만 주어졌을 경우,
            reviews = reviewRepository.findAllByColor(color);
        }else if(color == null && size != null){
            // size만 주어졌을 경우,
            reviews = reviewRepository.findAllBySize(size);
        }else{
            // color와 size가 둘 다 주어졌을 경우,
            reviews = reviewRepository.findAllByCategory(color, size);
        }

        // review에 남긴 평점을 기반으로, 슬로프 원 알고리즘에 사용할 DataModel 데이터 셋을 생성하는 과정.
        final List<DataModel> dataModel = reviews.stream()
                .map(rv -> new DataModel(rv.getUser().getId(), rv.getProduct().getId(),
                        rv.getRatingCnt()))
                .collect(Collectors.toList());

        final List<Review> myReviews = reviews.stream()
                .filter(review -> review.getUser().getUserId.equals(userId)
                        .collect(Collectors.toList()));

        final List<RecommendationResponse> recommendedItems = recommender
                .recommend(new DataMatrix(dataModel), userId, 3.0);

        List<RecommendedProductResponse> products = recommendedItems.stream()
                .map(res -> new RecommendedProductResponse(productRepository.getById(res.getItemId()),
                        res.getExpectedRatingCnt()))
                .sorted(Comparator.comparingDouble(RecommendedProductResponse::getExpectedRatingCnt))
                .limit(pageSize)
                .collect(Collectors.toList());

        // 추천할 상품의 개수가 한 페이지에서 보여줄 수 있는 갯수보다 적을 때, 추천 상품 갯수를 채우기 위한 로직이다.
        if(recommendedItems.size() < pageSize){

            addItemByRatingCntAvg(products, myReviews, userId, pageSize, color, size);
        }

        return products;

    }

    private void addItemByRatingCntAvg(List<RecommendedProductResponse> products,
                                       List<Review> myReviews,
                                       Long userId, int pageSize, String color, String size){
        List<RecommendedProductResponse> productsByRatingCnt;


        // Product 타입의 객체를 RecommendedProductResponse 타입의 객체로 변환해준다.
        if(color == null && size == null){
            productsByRatingCnt = productRepository
                    .findProductsForUser(userId, Pageable.ofSize(pageSize))
                    .stream()
                    .map(product -> new RecommendedProductResponse(product, 0))
                    .collect(toList());
        }else if(color != null && size == null){
            productsByRatingCnt = productRepository
                    .findProductsForUser(userId, Pageable.ofSize(pageSize), color, null)
                    .stream()
                    .map(product -> new RecommendedProductResponse(product, 0))
                    .collect(toList());
        }else if(color == null && size != null){
            productsByRatingCnt = productRepository
                    .findProductsForUser(userId, Pageable.ofSize(pageSize), null, size)
                    .stream()
                    .map(product -> new RecommendedProductResponse(product, 0))
                    .collect(toList());
        }else{
            productsByRatingCnt = productRepository
                    .findProductsForUser(userId, Pageable.ofSize(pageSize), color, size)
                    .stream()
                    .map(product -> new RecommendedProductResponse(product, 0))
                    .collect(toList());
        }


        productsByRatingCnt = sortByNoTriedItem(productsByRatingCnt, myReviews);

        for(RecommendedProductResponse product : productsByRatingCnt){
            if(products.size() < pageSize && !products.contains(product)){
                products.add(product);
            }
        }

    }

    // 사용자가 리뷰를 작성하지 않은 아이템들에 대한 정렬
    private List<RecommendedProductResponse> sortByNoTriedItem(List<RecommendedProductResponse> products,
                                                               List<Review> myReviews){
        List<RecommendedProductResponse> triedProducts = new ArrayList<>();
        List<RecommendedProductResponse> noTriedProducts = new ArrayList<>();

        // addProductByCheckingTriedOrNot 사용자가 리뷰를 작성했는지 작성하지 않았는지 확인하고, 그에 따라서 다른 List에 데이터를 삽입하는 메서드이다.
        for(RecommendedProductResponse product : products){
            addProductByCheckingTriedOrNot(myReviews, triedProducts, noTriedProducts, product);
        }

        noTriedProducts.addAll(triedProducts);
        return noTriedProducts;
    }


    private void addProductByCheckingTriedOrNot(List<Review> myReviews,
                                                List<RecommendedProductResponse> triedProducts,
                                                List<RecommendedProductResponse> noTriedProducts,
                                                RecommendedProductResponse product){
        myReviews.stream()
                .filter(review -> review.getProduct().getId()
                        .equals(product.getProduct().getId()))
                .findAny()
                .ifPresentOrElse(review -> {
                    if(review.getRate() > 3){
                        triedProducts.add(product);
                    }
                }, () -> noTriedProducts.add(product));
    }

}
