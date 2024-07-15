import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  price: string;
  color: string;
  size: number;
  quantity: number;
  image: string;
}

interface OrderProductItemProps {
  product: Product;
}

const OrderProductItem: React.FC<OrderProductItemProps> = ({ product }) => {
  return (
    <OrderProductItemBox>
      <ProductImageBox src={product.image} alt={product.name}></ProductImageBox>
      <ProductDetails>
        <ProductTitle>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </ProductTitle>
        <ProductSubInfo>
          색상: {product.color} / 사이즈: {product.size}
        </ProductSubInfo>
        <ProductQuantity>{product.quantity}개</ProductQuantity>
      </ProductDetails>
    </OrderProductItemBox>
  );
};

export default OrderProductItem;

const OrderProductItemBox = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 1rem;
`;

const ProductImageBox = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 6rem;
  height: 6rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  flex: 1 0 0;
`;

const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 0.25rem;

  h3,
  p {
    color: var(--black--900);
    font-feature-settings: 'calt' off;

    /* body/body1/bold */
    font-family: Pretendard;
    font-size: var(--body--body1--bold);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.01rem;
  }

  p {
    /* body/body3/regular */
    font-size: var(--body--body3--regular);
    font-weight: 400;
    letter-spacing: -0.0088rem;
  }
`;

const ProductSubInfo = styled.div`
  color: var(--gray--500);
  font-feature-settings: 'calt' off;

  /* caption/caption2/regular */
  font-family: Pretendard;
  font-size: var(--caption--caption2--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;

const ProductQuantity = styled.div`
  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--body--body3--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0088rem;
`;
