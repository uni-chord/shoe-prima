import styled from 'styled-components';
import IconButton from '../common/IconButton';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked = false, onChange }) => {
  return (
    <CheckBoxBox onClick={onChange}>
      <HiddenCheckBox checked={checked} onChange={onChange} />
      <IconButtonWrapper isChecked={checked}>
        {checked && <IconButton iconName="check" iconColor="#fff" />}
      </IconButtonWrapper>
    </CheckBoxBox>
  );
};

export default CheckBox;

const CheckBoxBox = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
`;

const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

interface IconButtonWrapperProps {
  isChecked: boolean;
}

const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isChecked }) =>
    isChecked ? 'var(--black--900)' : 'var(--white--900)'};
  border: 1px solid var(--black--900);
  cursor: pointer;
`;
