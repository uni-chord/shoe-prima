import styled from 'styled-components';

const ExpectedPayment: () => JSX.Element = () => {
  return (
    <ExpectedPaymentBox>
      <Title>예상 주문 내역</Title>
      <PaymentInfo>
        <PaymentInfoItem>
          <p>상품 금액</p>
          <p>999,999원</p>
        </PaymentInfoItem>
        <PaymentInfoItem>
          <p>배송비</p>
          <p>무료</p>
        </PaymentInfoItem>
      </PaymentInfo>

      <TotalPrice>
        <p>총 결제 금액</p>
        <p>999,999,999원</p>
      </TotalPrice>
    </ExpectedPaymentBox>
  );
};

export default ExpectedPayment;

const ExpectedPaymentBox = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: var(--title--title1--regular) 0rem 0rem;
    border-top: 1px solid var(--lightgray--300);
  }
`;

const Title = styled.h2`
  padding-bottom: var(--title--title2--regular);

  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--headline--headline2--regular);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.17px;
`;

const PaymentInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--body--body1--regular);

  padding-bottom: 1.75rem;
`;

const PaymentInfoItem = styled.li`
  display: flex;
  justify-content: space-between;

  p {
    color: var(--black--900);
    font-feature-settings: 'calt' off;

    /* body/body1/regular */
    font-family: Pretendard;
    font-size: var(--body--body1--regular);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.01rem;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 0rem;
  align-items: center;

  border-top: 3px solid var(--gray--900);

  p {
    color: var(--black--900);
    font-feature-settings: 'calt' off;

    /* heading/heading2/bold */
    font-family: Pretendard;
    font-size: var(--heading--heading2--regular);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.0125rem;

    /* 두 번째 p 태그 */
    &:nth-of-type(2) {
      /* title/title3/bold */
      font-size: var(--title--title3--regular);
      font-weight: 700;
      letter-spacing: -0.015rem;
    }
  }
`;
