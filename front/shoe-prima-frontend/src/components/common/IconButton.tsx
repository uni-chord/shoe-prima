import styled from 'styled-components';

interface IconButtonProps {
  iconName: string;
  onClick?: () => void;
  ariaLabel?: string;
  iconColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onClick,
  ariaLabel,
  iconColor,
}) => {
  return (
    <StyledIconButton onClick={onClick} aria-label={ariaLabel}>
      <span className="material-icons" style={{ color: iconColor }}>
        {iconName}
      </span>
    </StyledIconButton>
  );
};

export default IconButton;

const StyledIconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons {
    font-size: 24px;
  }

  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: transparent;
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }
`;
