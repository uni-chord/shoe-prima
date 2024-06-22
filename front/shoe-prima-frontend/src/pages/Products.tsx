import CategoryTitle from '../components/products/CategoryTitle';
import ProductList from '../components/products/ProductList';
import SideBar from '../components/products/SideBar';
import styled from 'styled-components';

const Products: () => JSX.Element = () => {
  return (
    <>
      <CategoryTitle />
      <Product>
        <SideBar />
        <ProductList />
      </Product>
    </>
  );
};

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin: 0 auto;
`;
export default Products;
