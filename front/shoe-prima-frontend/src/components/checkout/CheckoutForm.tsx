import styled from 'styled-components';
import PaymentOptions from './PaymentOptions';
import ShippingAddress from './ShippingAddress';

const CheckoutForm: () => JSX.Element = () => {
  return (
    <CheckoutFormBox>
      <Title>
        <h1>주문결제</h1>
        <p>총 3개의 상품</p>
      </Title>
      <ShippingAddress />
      <PaymentOptions />
    </CheckoutFormBox>
  );
};

export default CheckoutForm;

const CheckoutFormBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 68%;

  @media (max-width: 768px) {
    width: 100%;
  }

  /* background-color: pink; */
`;

const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  gap: var(--body--body1--regular);

  padding-bottom: 2rem;

  h1 {
    color: var(--black--900);
    font-feature-settings: 'calt' off;

    /* title/title3/bold */
    font-family: Pretendard;
    font-size: var(--title--title3--bold);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.015rem;
  }

  p {
    color: var(--gray--500);
    font-feature-settings: 'calt' off;

    /* headline/headline2/regular */
    font-family: Pretendard;
    font-size: var(--headline--headline2--regular);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0106rem;
  }
`;
