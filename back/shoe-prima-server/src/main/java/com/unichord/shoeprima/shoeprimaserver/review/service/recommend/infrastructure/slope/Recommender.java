package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Component
public class Recommender {

    public List<RecommendationResponse> recommend(DataMatrix dataMatrix, Long memberId,
              double minRatingCnt){

        final Map<Long, Map<Long, ItemCounter>> matrix = dataMatrix.getMatrix();
        final Map<Long, Byte> dataByMember = dataMatrix.getDataByMember(memberId);
        final List<RecommendationResponse> recommendItems = new ArrayList<>();

        // 사용자를 기준으로 특정 상품에 대한 선호(별점)을 나타내는 Map에는 double 타입이 아닌 Byte 타입을 사용하는 것, 주의해야한다.

        for(Map.Entry<Long, Map<Long, ItemCounter>> matrixEntry : matrix.entrySet()){

            // 예상 별점을 계산할 상품을 나타내는 primaryItemId
            final Long primaryItemId = matrixEntry.getKey();

            // primaryItemId로 표시되는 상품과 비교되는 다른 상품(Long)과 선호도 차이(ItemCounter).
            final Map<Long, ItemCounter> matrixValue = matrixEntry.getValue();

            // 사용자가 해당 상품에 대해 이미 별점을 남겼다면 추정 별점을 계산할 필요가 없으므로 continue한다.
            if(dataByMember.containsKey(primaryItemId)){
                continue;
            }

            double sumValue = 0.0;
            long count = 0;

            for(Map.Entry<Long, Byte> itemRatingCnt : dataByMember.entrySet()){
                final Long itemId = itemRatingCnt.getKey();
                final Byte ratingCnt = itemRatingCnt.getValue();

                if(!matrixValue.containsKey(itemId)){
                    continue;
                }
                // matrixValue에는 타겟 상품(primaryItemId)와 비교되는 상품 정보 id와 별점 차이가 들어있다.
                // 즉, if(!matrixValue.containsKey(itemId)) 조건문은 타겟 상품과의 별점 차이 정보가 없는 상품은 continue 하는 기능을 구현하고 있다.


                final ItemCounter itemCounter = matrixValue.get(itemId);
                final double deviation = itemCounter.getDeviation();
                sumValue += (ratingCnt + deviation) * itemCounter.getCount();
                count += itemCounter.getCount();
            }

            if(count == 0) continue;

            double expectedRatingCnt = sumValue / count;
            if(expectedRatingCnt >= minRatingCnt){
                if(expectedRatingCnt > 5.0){
                    expectedRatingCnt = 5.0;
                }
            }
            recommendItems.add(new RecommendationResponse(primaryItemId, expectedRatingCnt));

        }

        return recommendItems;

    }

}
