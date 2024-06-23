import styled from 'styled-components';

// content: 필수사항, 나머지: 선택사항
interface ButtonProps {
  content: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

// $를 붙여서 StyledButton으로 전달
const Button: React.FC<ButtonProps> = ({
  content,
  primary,
  secondary,
  tertiary,
  outline,
  disabled,
}) => {
  return (
    <StyledButton
      $primary={primary}
      $secondary={secondary}
      $tertiary={tertiary}
      $outline={outline}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  $primary?: boolean;
  $secondary?: boolean;
  $tertiary?: boolean;
  $outline?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 21.375rem;
  width: 100%;
  color: white;
  padding: 0.9375rem 1.5rem;
  border: none;
  border-radius: var(--border-radius---border-radius-s, 8px);
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 1rem);
  cursor: pointer;

  ${({ $primary }) =>
    $primary &&
    `
    background-color: var(--black--900);
    &:hover {
      background-color: var(--gray--900);
    }
  `}

  ${({ $outline }) =>
    $outline &&
    `
    background-color: transparent;
    color: var(--black--900);
    border: 1px solid var(--lightgray--300);
    &:hover {
      background-color: transparent;
      border: 1px solid var(--gray--900);
    }
  `}

  ${({ $secondary }) =>
    $secondary &&
    `
    background-color: var(--gray--500);
  `}

  ${({ $tertiary }) =>
    $tertiary &&
    `
    background-color: var(--white--900);
    color: var(--gray--500);
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: var(--lightgray--300);
    color: var(--gray--700);
    cursor: not-allowed;
  `}

  ${({ disabled, $primary }) =>
    disabled &&
    $primary &&
    `
    background-color: var(--lightgray--200);
    color: var(--black--opacity10);
    border: 1px solid var(--lightgray--200);
    &:hover {
      background-color: var(--lightgray--200);
      color: var(--black--opacity10);
      border: 1px solid var(--lightgray--200);
    }
  `}

  ${({ disabled, $primary, $outline }) =>
    disabled &&
    $primary &&
    $outline &&
    `
    background-color: transparent;
    color: var(--lightgray--300);
    border: 1px solid var(--lightgray--300);
    &:hover {
      background-color: transparent;
      border: 1px solid var(--lightgray--300);
    }
  `}
`;
