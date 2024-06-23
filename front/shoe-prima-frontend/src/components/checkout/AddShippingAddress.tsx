import { CheckBox, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';

const AddShippingAddress: () => JSX.Element = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: '',
    contact: '',
    address: '',
    extraAddress: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    contact: false,
    address: false,
    extraAddress: false,
    shippingRequest: false,
  });

  const options = [
    { value: 'leaveAtDoor', label: '문 앞에 놔주세요.' },
    { value: 'withGuard', label: '경비실에 맡겨주세요.' },
    { value: 'contactFirst', label: '미리 연락 주세요.' },
    { value: 'noRequest', label: '특별한 요청 사항 없음' },
  ];

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
    setErrors({ ...errors, shippingRequest: false });
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setIsOpen(false);

    const newErrors = {
      name: !inputValues.name.trim(),
      contact: !inputValues.contact.trim(),
      address: !inputValues.address.trim(),
      extraAddress: !inputValues.extraAddress.trim(),
      shippingRequest: !selectedOption,
    };

    setErrors(newErrors);

    const testInput = Object.values(inputValues);
    alert(testInput);
  };

  return (
    <AddAddShippingAddressBox>
      <Title>배송지 정보 입력</Title>
      <ShippingForm onSubmit={handleSubmit}>
        <PersonalInfo>
          <InputBox>
            <Label>
              받으실 분 <span>*</span>
            </Label>
            <Input
              name="name"
              placeholder="받으실 분"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              $hasError={errors.name}
            />
            {errors.name && <WarningText>필수 입력 항목입니다.</WarningText>}
          </InputBox>
          <InputBox>
            <Label>
              연락처 <span>*</span>
            </Label>
            <Input
              name="contact"
              placeholder="연락처"
              type="number"
              value={inputValues.contact}
              onChange={handleInputChange}
              $hasError={errors.contact}
            />
            {errors.contact && <WarningText>필수 입력 항목입니다.</WarningText>}
          </InputBox>
        </PersonalInfo>

        <Address>
          <InputBox>
            <Label>
              배송 주소 <span>*</span>
            </Label>
            <AddressSearchInputBox>
              <Input
                name="address"
                placeholder="배송 주소"
                type="text"
                value={inputValues.address}
                onChange={handleInputChange}
                $hasError={errors.address}
              />
              <Button>검색</Button>
            </AddressSearchInputBox>
            {errors.address && <WarningText>필수 입력 항목입니다.</WarningText>}
          </InputBox>
          <InputBox>
            <Input
              name="extraAddress"
              placeholder="나머지 주소 입력"
              type="text"
              value={inputValues.extraAddress}
              onChange={handleInputChange}
              $hasError={errors.extraAddress}
            />
            {errors.extraAddress && (
              <WarningText>필수 입력 항목입니다.</WarningText>
            )}
          </InputBox>
        </Address>

        <ShippingRequest>
          <DropDownContainer>
            <DropDownHeader
              onClick={() => setIsOpen(!isOpen)}
              $hasError={errors.shippingRequest}
            >
              {selectedOption
                ? options.find((option) => option.value === selectedOption)
                    ?.label
                : '배송 시 요청 사항을 선택해주세요.'}
              {isOpen ? <StyledExpandLess /> : <StyledExpandMore />}
            </DropDownHeader>
            {errors.shippingRequest && (
              <WarningText>필수 입력 항목입니다.</WarningText>
            )}
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

        <ButtonContainer>
          <WhiteButton type="button">취소</WhiteButton>
          <BlackButton type="submit">배송지 추가</BlackButton>
        </ButtonContainer>
      </ShippingForm>
    </AddAddShippingAddressBox>
  );
};

export default AddShippingAddress;

const AddAddShippingAddressBox = styled.section`
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

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--headline--headline2--regular);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0106rem;
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

const WarningText = styled.p`
  padding-top: 0.375rem;

  color: var(--red--900);
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--body--body3--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0088rem;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;

  max-height: 1.2rem;

  padding: 0.9375rem 1.125rem;

  background: var(--white--900);
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? 'var(--red--900);' : 'var(--lightgray--300)'};
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

  /* number 타입 기본 css 속성 제거 */
  appearance: textfield; /* 표준 속성 추가 */
  -moz-appearance: textfield; /* Firefox에서 기본 숫자 입력 스타일을 제거 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none; /* 웹킷 브라우저에서 스핀 버튼 제거 */
    margin: 0;
  }
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

const DropDownHeader = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  flex: 1 0 0;

  padding: 0.9375rem 0.625rem 0.9375rem 1.125rem;

  background: var(--white--900);
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? 'var(--red--900)' : 'var(--lightgray--300)'};
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

// 5. 배송지 추가 버튼
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const WhiteButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 10.6875rem;

  background: transparent;
  border: 1px solid var(--lightgray--300);

  color: var(--black-900);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlackButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 10.6875rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
