import React, { useState } from 'react';
import styled from 'styled-components';
import CheckoutInfo from '../components/checkout/CheckoutInfo';
import CartInfo from '../components/cart/CartInfo';
import CartList from '../components/cart/CartList';

const Cart: React.FC = () => {
  const [cartLists, setCartLists] = useState([1, 2]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleRemoveCartList = (id: number): void => {
    setCartLists(cartLists.filter((cartListId) => cartListId !== id));
    setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
  };

  const handleCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    }
  };

  const handleSelectAll = () => {
    if (checkedItems.length === cartLists.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(cartLists);
    }
  };

  const handleRemoveSelected = () => {
    setCartLists(cartLists.filter((id) => !checkedItems.includes(id)));
    setCheckedItems([]);
  };

  return (
    <CartBox>
      <CartListBox>
        <CartInfo
          totalItems={checkedItems.length}
          onSelectAll={handleSelectAll}
          onRemoveSelected={handleRemoveSelected}
          allSelected={checkedItems.length === cartLists.length}
        />
        {cartLists.map((id) => (
          <CartList
            key={id}
            id={id}
            onRemove={() => handleRemoveCartList(id)}
            onCheck={handleCheck}
            checked={checkedItems.includes(id)}
          />
        ))}
      </CartListBox>
      <Divider />
      <CheckoutInfo />
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const CartListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Divider = styled.div`
  align-self: stretch;
  width: 0.0625rem;
  background: var(--lightgray--300);

  @media (max-width: 768px) {
    display: none;
  }
`;
