import styled from 'styled-components';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CheckoutInfo from '../components/checkout/CheckoutInfo';

const Checkout: () => JSX.Element = () => {
  return (
    <CheckoutBox>
      <CheckoutForm />
      <Divider />
      <CheckoutInfo />
    </CheckoutBox>
  );
};

export default Checkout;

const CheckoutBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Divider = styled.div`
  align-self: stretch;
  width: 0.0625rem;
  background: var(--lightgray--300);

  @media (max-width: 768px) {
    display: none;
  }
`;
