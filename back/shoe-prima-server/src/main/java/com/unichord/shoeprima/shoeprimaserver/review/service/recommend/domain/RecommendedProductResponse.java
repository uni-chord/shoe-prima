package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.domain;

// import com.jujeol.drink.drink.domain.Drink;


import com.unichord.shoeprima.shoeprimaserver.product.model.Product;
import lombok.*;

@AllArgsConstructor // 테이블이 아니기에 정보 노출에 대한 위험성이 없을 것이라 판단, @AllArgsConstructor를 사용하였다.
@EqualsAndHashCode(of = "product") // product 변수만을 이용하는 equals 메서드와 hashcode 메서드를 생성한다.
@Getter
@NoArgsConstructor
public class RecommendedProductResponse {

    private Product product;
    private double expectedRatingCnt;


}
