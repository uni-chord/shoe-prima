import styled from 'styled-components';

const Order: () => JSX.Element = () => {
  return (
    <>
      <Orders>
        <ProductImage src="/src/assets/testImg1.png" alt="Product Image" />
        <ProductInfo>
          <Product>
            <ProductTitle>상품 이름</ProductTitle>
            <ProductPrice>999,999원</ProductPrice>
          </Product>
          <ProductOption>색상: 핑크 / 사이즈: 230</ProductOption>
          <ProductPrice>1개</ProductPrice>
        </ProductInfo>
      </Orders>
    </>
  );
};

const Orders = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  align-self: stretch;
`;

const Product = styled.div`
  align-self: stretch;
`;

const ProductImage = styled.img`
  width: 96px;
  height: 96px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ProductTitle = styled.div`
  align-self: stretch;

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

const ProductPrice = styled.div`
  align-self: stretch;
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const ProductOption = styled.div`
  align-self: stretch;

  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* caption/caption2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---caption2-font-size, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
`;
export default Order;
