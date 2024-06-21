import styled from 'styled-components';

interface ButtonProps {
  content: string;
  primary?: boolean;
  outline?: boolean;
}

const SubButton: React.FC<ButtonProps> = ({ content, primary, outline }) => {
  return (
    <StyledButton $primary={primary} $outline={outline}>
      {content}
    </StyledButton>
  );
};

export default SubButton;

const StyledButton = styled.button<{
  $primary?: boolean;
  $outline?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.75rem;
  height: 2rem;
  color: white;
  padding: 0.25rem 0.75rem;
  border: none;
  font-family: Pretendard;
  font-size: 0.9375rem;
  cursor: pointer;

  ${({ $primary }) =>
    $primary &&
    `
    background-color: var(--black--900);
  `}

  ${({ $outline }) =>
    $outline &&
    `
    background-color: var(--white--900);
    color: var(--black--900);
    border: 1px solid var(--lightgray--300);
  `}
`;
