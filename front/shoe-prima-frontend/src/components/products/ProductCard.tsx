import styled from 'styled-components';
import { FavoriteBorder } from '@mui/icons-material';

const ProductCard: () => JSX.Element = () => {
  return (
    <>
      <Product>
        <ImgContainer>
          <ProductImg src="/src/assets/testImg1.png"></ProductImg>
          <Favorite>
            <FavoriteBorder />
          </Favorite>
        </ImgContainer>
        <ProductInfo>
          <Badge>Badge</Badge>
          <TextContainer>
            <TitleContainer>
              <ProductTitle>상품 이름</ProductTitle>
              <SubTitle>4개 색상</SubTitle>
            </TitleContainer>
            <ProductPrice>999,999,999원</ProductPrice>
          </TextContainer>
        </ProductInfo>
      </Product>
    </>
  );
};

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const ImgContainer = styled.div`
  display: flex;
  height: 293.33px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  position: relative;
`;

const Favorite = styled.div`
  width: var(--font-size---title3-font-size, 24px);
  height: var(--font-size---title3-font-size, 24px);

  position: absolute;
  right: 16.333px;
  top: 16px;

  color: var(--black--opacity20);

  cursor: pointer;
`;

const ProductImg = styled.img`
  display: flex;
  height: 293.33px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;

const ProductInfo = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Badge = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: var(--border-radius---border-radius-xs, 4px);
  background: var(--color---orangeOpacity10, rgba(255, 149, 0, 0.1));

  color: var(--orange-900, var(--color---orange900, #ff9500));
  font-feature-settings: 'calt' off;

  /* caption/caption2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---caption2-font-size, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--font-size---headline1-font-size, 18px);
  align-self: stretch;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
`;

const ProductTitle = styled.div`
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

const SubTitle = styled.div`
  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const ProductPrice = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body1/bold */
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export default ProductCard;
