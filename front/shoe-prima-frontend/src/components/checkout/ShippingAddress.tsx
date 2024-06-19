import { CheckBox, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';

const ShippingAddress: () => JSX.Element = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'leaveAtDoor', label: '문 앞에 놔주세요.' },
    { value: 'withGuard', label: '경비실에 맡겨주세요.' },
    { value: 'contactFirst', label: '미리 연락 주세요.' },
    { value: 'noRequest', label: '특별한 요청 사항 없음' },
  ];

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <ShippingAddressBox>
      <Title>배송지 정보</Title>
      <ShippingForm>
        <PersonalInfo>
          <InputBox>
            <Label>
              받으실 분 <span>*</span>
            </Label>
            <Input placeholder="받으실 분" />
          </InputBox>
          <InputBox>
            <Label>
              연락처 <span>*</span>
            </Label>
            <Input placeholder="연락처" />
          </InputBox>
        </PersonalInfo>

        <Address>
          <InputBox>
            <Label>
              배송 주소 <span>*</span>
            </Label>
            <AddressSearchInputBox>
              <Input placeholder="배송 주소" />
              <Button>검색</Button>
            </AddressSearchInputBox>
          </InputBox>
          <Input placeholder="나머지 주소 입력" />
        </Address>

        <ShippingRequest>
          <DropDownContainer>
            <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
              {selectedOption
                ? options.find((option) => option.value === selectedOption)
                    ?.label
                : '배송 시 요청 사항을 선택해주세요.'}
              {isOpen ? <StyledExpandLess /> : <StyledExpandMore />}
            </DropDownHeader>
            {isOpen && (
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </ListItem>
                ))}
              </DropDownList>
            )}
          </DropDownContainer>
        </ShippingRequest>

        <CheckDefaultAddress>
          <StyledCheckBox />
          기본 배송지로 설정
        </CheckDefaultAddress>
      </ShippingForm>
    </ShippingAddressBox>
  );
};

export default ShippingAddress;

const ShippingAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  padding: var(--title--title1--regular) 0rem;
  border-top: 1px solid var(--lightgray--300);
`;

const Title = styled.h2`
  padding-bottom: var(--title--title2--regular);

  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--heading--heading2--bold);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;
`;

const ShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--title--title2--regular);
`;

// 1. 받으실 분, 연락처
const PersonalInfo = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: var(--caption--caption2--regular);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
`;

const Label = styled.label`
  display: flex;
  align-self: stretch;

  gap: 0.25rem;

  padding-bottom: 0.5rem;

  color: var(--black--900);
  font-feature-settings: 'calt' off;

  /* label/regular */
  font-family: Pretendard;
  font-size: var(--label--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;

  span {
    color: var(--red--900);
  }
`;

const Input = styled.input`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;

  padding: 0.9375rem 1.125rem;

  background: var(--white--900);
  border: 1px solid var(--lightgray--300);
  border-radius: var(--border-radius---border-radius-s, 8px);

  color: var(--black--opacity20);
  font-feature-settings: 'calt' off;
  outline: none;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--body--body2--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;
`;

// 2. 배송지 주소
const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: var(--caption--caption2--regular);
`;

const AddressSearchInputBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: var(--caption--caption2--regular);
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  height: 3rem;
  padding: 0.9375rem 1.5rem;

  background: var(--black--900);
  border: none;
  border-radius: var(--border-radius---border-radius-s, 8px);

  color: var(--white--900);
  font-feature-settings: 'calt' off;

  font-family: Pretendard;
  font-size: var(--body--body1--regular);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.01rem;

  cursor: pointer;
`;

// 3. 배송 요청 사항
const ShippingRequest = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  /* gap: var(--caption--caption2--regular); */
`;

const DropDownContainer = styled.div`
  width: 100%;
`;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  flex: 1 0 0;

  padding: 0.9375rem 0.625rem 0.9375rem 1.125rem;

  background: var(--white--900);
  border: 1px solid var(--lightgray--300);
  border-radius: var(--border-radius---border-radius-s, 8px);

  color: var(--gray--900);
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--body--body2--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;

  cursor: pointer;
`;

const StyledExpandMore = styled(ExpandMore)`
  width: var(--title--title3--regular);
  height: var(--title--title3--regular);

  color: var(--gray--500);
`;

const StyledExpandLess = styled(ExpandLess)`
  width: var(--title--title3--regular);
  height: var(--title--title3--regular);

  color: var(--gray--500);
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;

  background: var(--white--900);
  border: 1px solid var(--lightgray--300);
  border-radius: var(--border-radius---border-radius-s, 8px);

  color: var(--gray--900);
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--body--body2--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;

  cursor: pointer;
`;

const ListItem = styled.li`
  padding: 0.9375rem 0.625rem 0.9375rem 1.125rem;

  &:hover {
    background: var(--lightgray--300);
  }
`;

// 4. 기본 배송지 설정
const CheckDefaultAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-top: 1rem;

  opacity: 0.3;

  color: var(--gray--900);
  font-feature-settings: 'calt' off;

  /* label/regular */
  font-family: Pretendard;
  font-size: var(--label--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0094rem;
`;

const StyledCheckBox = styled(CheckBox)`
  width: var(--title--title3--regular);
  height: var(--title--title3--regular);
  flex-shrink: 0;
`;
