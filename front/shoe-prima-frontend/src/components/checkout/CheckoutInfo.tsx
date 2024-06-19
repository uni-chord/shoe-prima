import styled from 'styled-components';
import ExpectedPayment from './ExpectedPayment';
import OrderProductInfo from './OrderProductInfo';

const CheckoutInfo: React.FC = () => {
  return (
    <CheckoutInfoBox>
      <ExpectedPayment />
      <PaymentButtonBox>
        <Button>결제하기</Button>
      </PaymentButtonBox>
      <OrderProductInfo />
    </CheckoutInfoBox>
  );
};

export default CheckoutInfo;

const CheckoutInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 32%;

  @media (max-width: 768px) {
    width: 100%;

    /* 768px 이하일 때 순서 변경 */
    & > *:nth-child(1) {
      order: 2;
    }
    & > *:nth-child(2) {
      order: 3;
    }
    & > *:nth-child(3) {
      order: 1;
    }
  }
`;

const PaymentButtonBox = styled.div`
  display: flex;
  padding: 0rem var(--padding---mobile-padding, 1.25rem) 1.25rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Button = styled.button`
  flex: 1 0 0;

  padding: 0.9375rem 1.5rem;

  background: var(--black--900);
  border: none;
  border-radius: var(--border-radius---border-radius-s, 8px);

  color: var(--white--900);
  font-feature-settings: 'calt' off;

  font-family: Pretendard;
  font-size: var(--body--body1--regular);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.01rem;

  cursor: pointer;
`;
