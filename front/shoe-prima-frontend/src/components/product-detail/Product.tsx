interface ProductProps {
  productId: string | undefined;
}

const Product: React.FC<ProductProps> = ({ productId }) => {
  return <div>Product Images for {productId}</div>;
};

export default Product;
