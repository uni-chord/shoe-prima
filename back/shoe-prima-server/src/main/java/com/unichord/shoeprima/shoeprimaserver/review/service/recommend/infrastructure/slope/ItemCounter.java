package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope;

public class ItemCounter {

    // sum은 Byte 타입의 ratingCnt 값을 합산하는 변수이기에 타입을 Byte가 아닌 double로 지정해야한다.
    private double sum = 0.0;

    private long count = 0L;

    public void addSum(double sum){
        ++this.count;
        this.sum += sum;
    }

    //
    public double getDeviation(){
        try{
            return sum/count;
        } catch (ArithmeticException e){
            return 0;
        }
    }

    public long getCount(){return count;}

}
