import styled from 'styled-components';

const Message: () => JSX.Element = () => {
  return (
    <>
      <MessageArea>
        <TitleContainer>
          <LargeTitle>주문해 주셔서 감사합니다.</LargeTitle>
          <SubTitle>상품 주문이 완료 되었습니다.</SubTitle>
          <SubTitle>배송이 시작되면 알림을 드리겠습니다.</SubTitle>
        </TitleContainer>
        <Button>주문 내역 / 배송 현황</Button>
      </MessageArea>
    </>
  );
};

const MessageArea = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 48px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const TitleContainer = styled.div``;

const LargeTitle = styled.div`
  margin-bottom: 20px;
  color: var(--black-900, var(--color---black900, #222));
  text-align: center;
  font-feature-settings: 'calt' off;

  /* title/title1/bold */
  font-family: Pretendard;
  font-size: var(--font-size---title1-font-size, 36px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const SubTitle = styled.div`
  color: var(--gray-500, var(--color---gray500, #808080));
  text-align: center;
  font-feature-settings: 'calt' off;

  /* body/body1/reading */
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const Button = styled.button`
  display: flex;
  width: 390px;
  padding: 15px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  cursor: pointer;

  border-radius: var(--border-radius---border-radius-s, 8px);
  background: var(--color---black900, #222);

  color: var(--white-900, var(--color---white900, #fff));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
`;

export default Message;
