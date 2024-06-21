import styled from 'styled-components';
import CheckBox from '../common/CheckBox';
import SubButton from '../common/SubButton';
import Title from '../common/Title';
import Counter from '../common/Counter';
import IconButton from '../common/IconButton';

interface CartListProps {
  id: number;
  onRemove: () => void;
  onCheck: (id: number, isChecked: boolean) => void;
  checked: boolean;
}

const CartList: React.FC<CartListProps> = ({
  id,
  onRemove,
  onCheck,
  checked,
}) => {
  const handleCheck = () => {
    onCheck(id, !checked);
  };

  const CostCard: React.FC<{ text: string }> = ({ text }) => {
    return (
      <CostCardBox>
        <TextBox>{text}원</TextBox> <SubButton content="바로구매" primary />
      </CostCardBox>
    );
  };

  return (
    <CartListBox>
      <CheckBoxArea className="desktop-only">
        <CheckBox checked={checked} onChange={handleCheck} />
      </CheckBoxArea>
      <ProductArea>
        <CheckBoxArea className="mobile-only">
          <CheckBox checked={checked} onChange={handleCheck} />
        </CheckBoxArea>
        <ProductWrapper>
          <CloseButton>
            <IconButton iconName="close" onClick={onRemove} />
          </CloseButton>
          <ProductCard>
            <ProductImg src="/src/assets/testImg1.png" />
            <ProductInfo>
              <Title
                mainTitleSize="1.0625rem"
                mainTitle="상품 이름"
                subTitleSize="0.875rem"
                subTitle="색 / 사이즈"
                gap="0.375rem"
                paddingBottom="0rem"
              />
              <Counter max={999} />
            </ProductInfo>
          </ProductCard>
        </ProductWrapper>
        <CostCard text="999,999" />
      </ProductArea>
    </CartListBox>
  );
};

export default CartList;

const CartListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CheckBoxArea = styled.div`
  display: flex;
  padding: 1rem 1.25rem;
  align-items: center;
  align-self: stretch;

  &.mobile-only {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      align-self: flex-start;
    }
  }

  &.desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ProductArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductWrapper = styled.div`
  position: relative;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.75rem 1.25rem;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CostCardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid var(--lightgray--300);
  border-bottom: 1px solid var(--lightgray--300);
  background: var(--lightgray--100);
  padding: 1rem;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 7.5rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
