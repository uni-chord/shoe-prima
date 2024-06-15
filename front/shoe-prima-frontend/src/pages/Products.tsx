import ProductList from '../components/products/ProductList';
import SideBar from '../components/products/SideBar';

const Products: () => JSX.Element = () => {
  return (
    <>
      <ProductList />
      <SideBar />
    </>
  );
};

export default Products;
