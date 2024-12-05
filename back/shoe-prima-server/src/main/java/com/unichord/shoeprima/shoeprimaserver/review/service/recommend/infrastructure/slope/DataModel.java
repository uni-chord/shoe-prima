package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope;

import java.util.Objects;

public class DataModel {

    private Long memberId;

    private Long itemId;

    // 특정 상품에 대한 사용자의 선호도 수치를 나타내는 변수.
    // 리뷰 객체에서 별점을 나타내는 변수 이름과 동일하게 명명하였다.
    private Byte ratingCnt;

    public DataModel(Long memberId, Long itemId, Byte ratingCnt){
        this.memberId = memberId;
        this.itemId = itemId;
        this.ratingCnt = ratingCnt;
    }

    public Long getMemberId() {
        return memberId;
    }

    public Long getItemId() {
        return itemId;
    }

    public Byte getRatingCnt() {
        return ratingCnt;
    }

    @Override
    public boolean equals(Object o){

        // 자기 자신과 비교하고 있다면 true를 반환.
        if (this == o) {
            return true;
        }

        // 매개변수 o가 null 이면 false를 반환
        // 메서드 호출 객체의 클래스와 매개변수 객체의 클래스가 다르면 false를 반환
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        // 자기 자신과 비교하는 것이 아니면서, 같은 클래스 타입이라면 아래의 로직이 진행된다.
        // 객체끼리의 비교를 위해 Object 타입으로 받아온 변수 o를 DataModel 타입으로 형변환 해준다.
        DataModel dataModel = (DataModel) o;

        // 이후, 사용자의 id와 상품의 id가 같은지 확인 후. 둘 다 동일하다면 true를 반환한다.
        return Objects.equals(getMemberId(), dataModel.getMemberId()) && Objects
                .equals(getItemId(), dataModel.getItemId());
    }

}
