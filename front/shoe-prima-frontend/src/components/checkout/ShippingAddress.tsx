import { useState } from 'react';
import styled from 'styled-components';

const ShippingAddress: () => JSX.Element = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // 최초 첫번째 주소 선택

  // 임시 주소 목록
  const addressData = [
    {
      name: '황민욱',
      address: '서울시 어쩌구 어쩌동 몇번지 어쩌구',
      zipCode: '12345',
      email: 'email@email.com',
      default: true,
    },
    {
      name: '황민욱',
      address:
        '경기도 화성시 동탄 삽니다만 상세주소는 비밀이지롱 아파트 101동 101호',
      zipCode: '12345',
      email: 'email@email.com',
      default: false,
    },
    {
      name: '황민욱',
      address: '서울시 어쩌구 어쩌동 몇번지 어쩌구 상세 주소',
      zipCode: '12345',
      email: 'email@email.com',
      default: false,
    },
  ];

  return (
    <ShippingAddressBox>
      <Title>
        배송지 정보
        <button>배송지 추가</button>
      </Title>
      <AddressList>
        {addressData.map((address, index) => (
          <AddressItem
            key={index}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            <AddressInfo>
              <p>{address.name}</p>
              <p>{address.address}</p>
              <p>{address.zipCode}</p>
              <p>{address.email}</p>
            </AddressInfo>
            <EditAddressBox>
              <ButtonBox>
                <button>편집</button>
                <button>제거</button>
              </ButtonBox>
              {address.default ? <DefaultAddress>기본</DefaultAddress> : <></>}
            </EditAddressBox>
          </AddressItem>
        ))}
      </AddressList>
    </ShippingAddressBox>
  );
};

export default ShippingAddress;

const ShippingAddressBox = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  padding: var(--title--title1--regular) 0rem;
  border-top: 1px solid var(--lightgray--300);
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  button {
    border: none;
    background: transparent;

    color: var(--gray--500);
    font-feature-settings: 'calt' off;

    /* body/body2/underline */
    font-family: Pretendard;
    font-size: var(--body--body2--regular);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0094rem;
    text-decoration-line: underline;

    cursor: pointer;
  }
`;

const AddressList = styled.ul`
  display: flex;
  gap: var(--title--title3--regular);

  overflow: scroll;

  /* 기본 스크롤바 숨기기 (웹킷 기반 브라우저용) */
  &::-webkit-scrollbar {
    width: 0; /* 세로 스크롤바 너비를 0으로 설정 */
    height: 0; /* 가로 스크롤바 높이를 0으로 설정 */
  }
  /* 기본 스크롤바 숨기기 (Firefox용) */
  scrollbar-width: none; /* 기본 스크롤바 숨기기 */
  -ms-overflow-style: none; /* 기본 스크롤바 숨기기 (IE 10+) */
`;

const AddressItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? 'var(--gray--900)' : 'var( --lightgray--300)'};
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--body--body1--regular);

  p {
    color: #000;
    font-feature-settings: 'calt' off;

    /* body/body1/regular */
    font-family: Pretendard;
    font-size: var(--body--body1--regular);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.01rem;

    /* 두 번째 p 태그 */
    &:nth-of-type(2) {
      /* body/body1/reading */
      line-height: 1.625rem; /* 162.5% */
    }
  }
`;

const EditAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  min-width: 120px; // 임의로 지정
`;

const ButtonBox = styled.div`
  display: flex;
  gap: var(--caption--caption2--regular);
  align-items: flex-start;
  flex: 1 0 0;

  button {
    min-width: 28px;
    padding: 0;

    background-color: transparent;
    border: none;

    color: var(--gray--500);
    font-feature-settings: 'calt' off;

    /* body/body2/underline */
    font-family: Pretendard;
    font-size: var(--body--body2--underline);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0094rem;
    text-decoration-line: underline;

    cursor: pointer;
  }
`;

const DefaultAddress = styled.div`
  display: flex;
  padding: 0.25rem 0.375rem;

  background: var(--orange--opacity10);
  border-radius: var(--border-radius---border-radius-xs, 4px);

  color: var(--orange--900);
  font-feature-settings: 'calt' off;

  /* caption/caption2/regular */
  font-family: Pretendard;
  font-size: var(--caption--caption2--regular);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;
