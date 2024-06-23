import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Product from '../components/product-detail/Product';
import ProductInfo from '../components/product-detail/ProductInfo';

interface Params {
  [key: string]: string | undefined; // useParams 훅의 반환 타입과 호환되도록 추가 설정
  productId: string | undefined;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<Params>();

  // productId가 없는 경우 예외 처리
  if (!productId) {
    return <div>Product ID is missing.</div>;
  }

  return (
    <>
      <ProductDetails>
        <Product productId={productId} />
        <ProductInfo productId={productId} />
      </ProductDetails>
    </>
  );
};

const ProductDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ProductDetail;
