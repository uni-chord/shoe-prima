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
      <p>동적 페이지 라우팅 테스트: {productId}</p>
      <Product productId={productId} />
      <ProductInfo productId={productId} />
    </>
  );
};

export default ProductDetail;
