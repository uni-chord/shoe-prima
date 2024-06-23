import styled from 'styled-components';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
  mainTitleSize?: string;
  subTitleSize?: string;
  gap?: string;
  paddingBottom?: string;
}

const Title: React.FC<TitleProps> = ({
  mainTitle,
  subTitle,
  mainTitleSize,
  subTitleSize,
  gap,
  paddingBottom,
}) => {
  return (
    <TitleBox gap={gap} paddingBottom={paddingBottom}>
      <MainTitle size={mainTitleSize}>{mainTitle}</MainTitle>
      {subTitle && <SubTitle size={subTitleSize}>{subTitle}</SubTitle>}
    </TitleBox>
  );
};

export default Title;

interface BoxProps {
  gap?: string;
  paddingBottom?: string;
}

const TitleBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ gap }) => gap || 'var(--font-size---body1-font-size, 16px)'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '2rem'};
`;

interface TextProps {
  size?: string;
}

const MainTitle = styled.div<TextProps>`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  font-family: Pretendard;
  font-size: ${({ size }) => size || 'var(--font-size---title2-font-size)'};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const SubTitle = styled.div<TextProps>`
  display: flex;
  flex-direction: row;
  color: var(--gray-500, var(--color---gray500));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: ${({ size }) => size || 'var(--font-size---heading2-font-size)'};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;
