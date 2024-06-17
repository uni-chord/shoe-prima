import styled from 'styled-components';

interface ProductProps {
  productId: string | undefined;
}

const Product: React.FC<ProductProps> = ({ productId }) => {
  return (
    <ProductImgArea>
      <img src="../../assets/testImg1.png" />
    </ProductImgArea>
  );
};

const ProductImgArea = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.5rem;
  border: 1px solid black;
  gap: var(--font-size---title1-font-size, 36px);
`;

export default Product;
