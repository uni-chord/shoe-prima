import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';

const OrderProductInfo: () => JSX.Element = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <OrderProductInfoBox>
      <Title onClick={() => setIsOpen(!isOpen)}>
        상품 상세 정보
        {isOpen ? <StyledExpandLess /> : <StyledExpandMore />}
      </Title>
      {isOpen ? (
        <ProductList>
          <p>테스트</p>
          <p>테스트</p>
        </ProductList>
      ) : (
        <></>
      )}
    </OrderProductInfoBox>
  );
};

export default OrderProductInfo;

const OrderProductInfoBox = styled.div`
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

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--heading--heading2--bold);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;

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

  /* background-color: skyblue; */
`;
