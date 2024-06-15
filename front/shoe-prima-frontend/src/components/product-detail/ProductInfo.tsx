interface ProductInfoProps {
  productId: string | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  return <div>ProductInfo for {productId}</div>;
};

export default ProductInfo;
