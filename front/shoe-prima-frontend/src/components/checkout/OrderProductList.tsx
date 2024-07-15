import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import OrderProductItem from './OrderProductItem';

const OrderProductList: () => JSX.Element = () => {
  const [isOpen, setIsOpen] = useState(true);

  // 임시 데이터
  const productData = [
    {
      id: 1,
      name: '상품 이름 1',
      price: '999,999,999원',
      color: '핑크',
      size: 230,
      quantity: 1,
      image: '/src/assets/testImg1.png',
    },
    {
      id: 2,
      name: '상품 이름 2',
      price: '1,000,000원',
      color: '블루',
      size: 240,
      quantity: 2,
      image: '/src/assets/testImg1.png',
    },
    {
      id: 3,
      name: '상품 이름 3',
      price: '500,000원',
      color: '그린',
      size: 250,
      quantity: 3,
      image: '/src/assets/testImg1.png',
    },
  ];
  return (
    <OrderProductListBox>
      <Title onClick={() => setIsOpen(!isOpen)}>
        상품 상세 정보
        {isOpen ? <StyledExpandLess /> : <StyledExpandMore />}
      </Title>
      {isOpen ? (
        <ProductList>
          {productData.map((product) => (
            <OrderProductItem key={product.id} product={product} />
          ))}
        </ProductList>
      ) : (
        <></>
      )}
    </OrderProductListBox>
  );
};

export default OrderProductList;

const OrderProductListBox = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 1.75rem;

  padding: var(--title--title1--regular) 0rem;
  border-top: 1px solid var(--lightgray--300);
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;

  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--headline--headline2--regular);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0106rem;

  cursor: pointer;
`;

const StyledExpandMore = styled(ExpandMore)`
  width: var(--title--title3--regular);
  height: var(--title--title3--regular);
`;

const StyledExpandLess = styled(ExpandLess)`
  width: var(--title--title3--regular);
  height: var(--title--title3--regular);
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1.75rem;
`;
