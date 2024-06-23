import styled from 'styled-components';
import CheckBox from '../common/CheckBox';
import Title from '../common/Title';

interface CartInfoProps {
  totalItems: number;
  onSelectAll: () => void;
  onRemoveSelected: () => void;
  allSelected: boolean;
}

const CartInfo: React.FC<CartInfoProps> = ({
  totalItems,
  onSelectAll,
  onRemoveSelected,
  allSelected,
}) => {
  return (
    <CartInfoBox>
      <Title
        mainTitleSize="28px"
        mainTitle="장바구니"
        subTitleSize="20px"
        subTitle={`총 ${totalItems}개의 상품`}
        gap="16px"
        paddingBottom="32px"
      />
      <SelectBox>
        <CheckAndTextBox>
          <CheckBox checked={allSelected} onChange={onSelectAll} />
          <TextBox>전체선택</TextBox>
        </CheckAndTextBox>
        <TextButton onClick={onRemoveSelected}>선택삭제</TextButton>
      </SelectBox>
    </CartInfoBox>
  );
};

export default CartInfo;

const CartInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding---mobile-padding, 20px)
    var(--padding---mobile-padding, 20px);
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Pretendard;
  font-size: var(--font-size---label-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const TextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  border: none;
  background-color: transparent;
  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body2/underline */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
  text-decoration-line: underline;
  cursor: pointer;
`;

const CheckAndTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
