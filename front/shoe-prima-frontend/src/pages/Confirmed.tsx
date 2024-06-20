import Message from '../components/confirmed/Message';
import OrderInfo from '../components/confirmed/OrderInfo';
import styled from 'styled-components';

const Confirmed: () => JSX.Element = () => {
  return (
    <>
      <ConfirmedBox>
        <Message />
        <OrderInfo />
      </ConfirmedBox>
    </>
  );
};

const ConfirmedBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export default Confirmed;
