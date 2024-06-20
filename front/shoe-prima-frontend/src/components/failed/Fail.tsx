import styled from 'styled-components';

const Fail: () => JSX.Element = () => {
  return (
    <>
      <MessageArea>
        <TitleContainer>
          <LargeTitle>결제에 실패했습니다.</LargeTitle>
          <SubTitle>돌아가서 다시 시도해주세요</SubTitle>
        </TitleContainer>
        <FailMessage>결제 실패 이유</FailMessage>
        <ButtonContainer>
          <Button1>홈으로 가기</Button1>
          <Button2>다시 주문하기</Button2>
        </ButtonContainer>
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

const FailMessage = styled.div`
  display: flex;
  width: 600px;
  padding: 36px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: var(--border-radius---border-radius-xs, 4px);
  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---lightgray100, #f9f9f9);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body1/bold */
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.16px;

  @media (max-width: 768px) {
    width: 300px;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  width: 390px;
  align-items: flex-start;
  gap: 8px;
`;

const Button1 = styled.button`
  display: flex;
  padding: 15px 24px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  cursor: pointer;

  background: var(--white-900, var(--color---white900, #fff));
  border-radius: var(--border-radius---border-radius-s, 8px);
  border: 1px solid var(--color---lightgray300, #e5e5e5);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
`;

const Button2 = styled.button`
  display: flex;
  padding: 15px 24px;
  flex: 1;
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

export default Fail;
