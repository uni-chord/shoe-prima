import React, { useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import CategoryContainer from './CategoryContainer';
import SizeContainer from './SizeContainer';
import ColorContainer from './ColorContainer';
import PriceContainer from './PriceContainter';

const SideBar: () => JSX.Element = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const toggleCategoryDetails = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const [isColorOpen, setIsColorOpen] = useState(true);

  const toggleColorDetails = () => {
    setIsColorOpen(!isColorOpen);
  };

  const [isSizeOpen, setIsSizeOpen] = useState(true);

  const toggleSizeDetails = () => {
    setIsSizeOpen(!isSizeOpen);
  };

  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const togglePriceDetails = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  return (
    <>
      <Bar>
        <Heading>
          <HeadTitle>필터</HeadTitle>
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
      </Bar>
    </>
  );
};

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.div`
  display: flex;
  padding-bottom: 28px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
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
  width: 240px;
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

export default SideBar;
