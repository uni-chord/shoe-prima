import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryContainer from './CategoryContainer';
import SizeContainer from './SizeContainer';
import ColorContainer from './ColorContainer';
import PriceContainer from './PriceContainter';

const FilterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const toggleCategoryDetails = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleColorDetails = () => setIsColorOpen(!isColorOpen);
  const toggleSizeDetails = () => setIsSizeOpen(!isSizeOpen);
  const togglePriceDetails = () => setIsPriceOpen(!isPriceOpen);

  return (
    <>
      <Bar>
        <Heading>
          <HeadTitle>필터</HeadTitle>
          <CloseButton onClick={onClose}>
            <span className="material-icons">close</span>
          </CloseButton>
        </Heading>
        <Menu>
          <ToggleButton onClick={toggleCategoryDetails}>
            카테고리
            {isCategoryOpen ? (
              <span className="material-icons">keyboard_arrow_down</span>
            ) : (
              <span className="material-icons">keyboard_arrow_up</span>
            )}
          </ToggleButton>
          {isCategoryOpen && <CategoryContainer />}
        </Menu>
        <Menu>
          <ToggleButton onClick={toggleColorDetails}>
            색상
            {isColorOpen ? (
              <span className="material-icons">keyboard_arrow_down</span>
            ) : (
              <span className="material-icons">keyboard_arrow_up</span>
            )}
          </ToggleButton>
          {isColorOpen && <ColorContainer />}
        </Menu>
        <Menu>
          <ToggleButton onClick={toggleSizeDetails}>
            사이즈
            {isSizeOpen ? (
              <span className="material-icons">keyboard_arrow_down</span>
            ) : (
              <span className="material-icons">keyboard_arrow_up</span>
            )}
          </ToggleButton>
          {isSizeOpen && <SizeContainer />}
        </Menu>
        <Menu>
          <ToggleButton onClick={togglePriceDetails}>
            가격대
            {isPriceOpen ? (
              <span className="material-icons">keyboard_arrow_down</span>
            ) : (
              <span className="material-icons">keyboard_arrow_up</span>
            )}
          </ToggleButton>
          {isPriceOpen && <PriceContainer />}
        </Menu>
        <ButtonArea>
          <Button1>지우기</Button1>
          <Button2>적용</Button2>
        </ButtonArea>
      </Bar>
    </>
  );
};

const Bar = styled.div`
  width: 100vw;
  display: flex;
  padding: 28px 20px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  z-index: 1000;
`;

const Heading = styled.div`
  display: flex;
  padding-bottom: 28px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  position: relative;

  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const CloseButton = styled.button`
  border: none;
  background: none;

  width: var(--font-size---title3-font-size, 24px);
  height: var(--font-size---title3-font-size, 24px);

  position: absolute;
  right: 5px;
  top: 0px;
`;

const HeadTitle = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading1/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading1-font-size, 22px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
`;

const Menu = styled.div`
  display: flex;
  padding: 28px 0px;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border: none;
  background-color: var(--white-900);
  cursor: pointer;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---headline2-font-size, 17px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.17px;
`;

const ButtonArea = styled.div`
  display: flex;
  padding: 20px var(--padding---mobile-padding, 20px);
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: sticky;
  bottom: 0;

  border-top: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);
`;

const Button1 = styled.button`
  display: flex;
  padding: 15px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  cursor: pointer;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
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

export default FilterModal;
