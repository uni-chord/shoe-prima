import { useState } from 'react';
import styled from 'styled-components';
import {
  FavoriteBorder,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Star,
  StarHalf,
  StarBorder,
} from '@mui/icons-material';
import Review from './Review';

interface ProductInfoProps {
  productId: string | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(true);

  const toggleInfoDetails = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const [isReviewOpen, setIsReviewOpen] = useState(true);

  const toggleReviewDetails = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const rating = 3.7; // 예시 점수
  const outOf = 5; // 별의 총 개수

  const filledStars = Math.floor(rating);
  const emptyStars = outOf - Math.ceil(rating);
  const halfStar = Math.ceil(rating) > filledStars ? 1 : 0;

  return (
    <div>
      <ProductInfoArea>
        <ProductInfoMain>
          <ProductNameArea>
            <ProductName>상품 이름</ProductName>
          </ProductNameArea>

          <ProductDetailsArea>
            <ProductPrice>999,999원</ProductPrice>
            <LikeButton>
              <FavoriteBorder />
            </LikeButton>
          </ProductDetailsArea>
        </ProductInfoMain>

        <OptionArea>
          <ColorSelectorContainer>
            <Title>색상</Title>
            <Colors></Colors>
          </ColorSelectorContainer>
        </OptionArea>

        <OptionArea>
          <SizeHeadlineContainer>
            <Title>사이즈 선택</Title>
            <SizeButton>사이즈 정보</SizeButton>
          </SizeHeadlineContainer>
        </OptionArea>
        <OptionArea>
          <QuantityArea>
            <Title>수량</Title>
          </QuantityArea>
        </OptionArea>

        <TotalPriceArea>
          <Total>합계</Total>
          <TotalPrice>999,999,999원</TotalPrice>
        </TotalPriceArea>
        <ButtonArea>
          <Button1>장바구니</Button1>
          <Button2>바로구매</Button2>
        </ButtonArea>

        <DetailsArea>
          <ToggleButton onClick={toggleInfoDetails}>
            상품 상세 정보{' '}
            {isInfoOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </ToggleButton>
          {isInfoOpen && (
            <DetailsContainer>
              <Details>스타일 코드</Details> <Details>abcdef</Details>
              <Details>제조국</Details> <Details>abcdef</Details>
              <Details>제조년월</Details> <Details>abcdef</Details>
              <Details>판매원</Details> <Details>abcdef</Details>
              <Details>제품 특징</Details>
              <Details>
                Lorem ipsum dolor sit amet consectetur. Suspendisse quisque in a
                odio morbi. Amet interdum eros vulputate eget. Vulputate diam
                nisl tellus purus. Fermentum nisi nunc ultrices natoque.
              </Details>
            </DetailsContainer>
          )}
        </DetailsArea>
        <ReviewArea>
          <ToggleButton onClick={toggleReviewDetails}>
            상품 리뷰 (1){' '}
            {isReviewOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </ToggleButton>
          {isReviewOpen && (
            <ReviewContainer>
              <StarContainer>
                {Array(filledStars)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} />
                  ))}
                {halfStar ? <StarHalf /> : null}
                {Array(emptyStars)
                  .fill(null)
                  .map((_, i) => (
                    <StarBorder key={i} />
                  ))}
              </StarContainer>
              <Rating>{rating.toFixed(1)}점</Rating>
              <Button1>리뷰 작성</Button1>
              <Review reviewId="1"></Review>
              <Review reviewId="2"></Review>
            </ReviewContainer>
          )}
        </ReviewArea>
      </ProductInfoArea>
    </div>
  );
};

const ProductInfoArea = styled.div`
  display: flex;
  width: 600px;
  padding-left: 2.5rem;
  flex-direction: column;

  border-left: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const ProductInfoMain = styled.div`
  padding-bottom: 2rem;
  gap: 1.25rem;
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const ProductDetailsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductNameArea = styled.div`
  margin-bottom: 1rem;
`;

const ProductName = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* title/title2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---title2-font-size, 28px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const ProductPrice = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const LikeButton = styled.div`
  cursor: pointer;

  svg {
    font-size: var(--title--title3--regular);
  }
`;

const OptionArea = styled.div`
  display: flex;
  padding: 1.5rem 0px;
  flex-direction: column;
  gap: 1.125rem;
`;

const ColorSelectorContainer = styled.div``;

const Title = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---headline2-font-size, 17px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.17px;
`;

const Colors = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeHeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SizeButton = styled.div`
  cursor: pointer;

  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body2/underline */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
  text-decoration-line: underline;
`;

const QuantityArea = styled.div`
  padding: 1.5rem 0rem;

  border-top: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const TotalPriceArea = styled.div`
  display: flex;
  padding: 2.25rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-top: 3px solid var(--color---gray900, #373737);
`;

const Total = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const TotalPrice = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* title/title3/bold */
  font-family: Pretendard;
  font-size: var(--font-size---title3-font-size, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const ButtonArea = styled.div`
  display: flex;
  padding: 0.375rem 0rem;
  padding-bottom: 2.25rem;
  justify-content: space-between;
  gap: 8px;
`;

const Button1 = styled.button`
  flex: 1;

  padding: 0.9375rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: var(--border-radius---border-radius-s, 8px);
  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background-color: var(--white--900);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;

  cursor: pointer;
`;

const Button2 = styled.button`
  flex: 1;

  padding: 0.9375rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: var(--border-radius---border-radius-s, 8px);
  background: var(--color---black900, #222);
  border: 1px solid var(--color---lightgray300, #e5e5e5);

  color: var(--white-900, var(--color---white900, #fff));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 16rem;
  border: none;
  border-radius: 5px;
  background-color: var(--white-900);
  cursor: pointer;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const DetailsArea = styled.div`
  display: flex;
  padding: 1.75rem 0rem;
  flex-direction: column;
  gap: 28px;
  align-self: stretch;

  border-top: 1px solid var(--color---lightgray300, #e5e5e5);
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const Details = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body3/reading */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;
`;

const ReviewArea = styled.div`
  display: flex;
  padding: 1.75rem 0rem;
  flex-direction: column;
  gap: 28px;
  align-self: stretch;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Rating = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---headline2-font-size, 17px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.17px;

  padding-bottom: 1rem;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProductInfo;
