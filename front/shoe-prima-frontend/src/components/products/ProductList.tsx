import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductList: React.FC = () => {
  return (
    <>
      <List>
        <Row>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--font-size---display2-font-size, 40px);
  flex: 1 0 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;

  @media (max-width: 768px) {
    & > * {
      flex: 1 1 calc(50% - 20px); // 각 카드가 전체 너비의 50%를 차지하고, 20px의 간격을 뺍니다.
    }
  }

  @media (min-width: 769px) {
    gap: 4px;
    & > * {
      flex: 1 1 calc(33.33% - 20px); // 각 카드가 전체 너비의 33.33%를 차지하고, 20px의 간격을 뺍니다.
    }
  }
`;

export default ProductList;
