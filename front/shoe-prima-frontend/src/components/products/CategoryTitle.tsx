import React, { useState } from 'react';
import styled from 'styled-components';
import FilterModal from './FilterModal';

const CategoryTitle: React.FC = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('추천순');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSortDetails = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setIsSortOpen(false);
  };

  const toggleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen); // 모달 토글
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false); // 모달 닫는 함수
  };

  return (
    <>
      <TitleContainer>
        <TitleText>Women (100)</TitleText>
        <FilterButton onClick={toggleFilterModal}>
          필터<span className="material-icons">filter_list</span>
        </FilterButton>
        <ToggleButton onClick={toggleSortDetails}>
          {sortOption}
          {isSortOpen ? (
            <span className="material-icons">keyboard_arrow_down</span>
          ) : (
            <span className="material-icons">keyboard_arrow_up</span>
          )}
        </ToggleButton>
        {isSortOpen && (
          <SortContainer>
            <SortOption onClick={() => handleSortChange('최신순')}>
              최신순
            </SortOption>
            <SortOption onClick={() => handleSortChange('가격낮은순')}>
              가격낮은순
            </SortOption>
            <SortOption onClick={() => handleSortChange('가격높은순')}>
              가격높은순
            </SortOption>
            <SortOption onClick={() => handleSortChange('추천순')}>
              추천순
            </SortOption>
          </SortContainer>
        )}
        {/* {isFilterOpen && <FilterModal onClose={closeFilterModal} />} */}
      </TitleContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 12px;
  gap: 6px;
  cursor: pointer;
  margin-right: 6px;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);

  color: var(--black-900, var(--color---black900, #222));
  text-align: center;
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;

  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const TitleText = styled.div`
  flex: 1;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* title/title2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---title2-font-size, 28px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 12px;
  gap: 6px;
  cursor: pointer;

  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);

  color: var(--black-900, var(--color---black900, #222));
  text-align: center;
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 0;
  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background: var(--color---white900, #fff);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const SortOption = styled.button`
  padding: 10px 20px;
  background: var(--color---white900, #fff);
  border: none;
  cursor: pointer;
  text-align: left;

  color: var(--black-900, var(--color---black900, #222));
  text-align: center;
  font-feature-settings: 'calt' off;

  /* body/body2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;

  &:hover {
    background: var(--color---lightgray100, #f9f9f9);
  }
`;

export default CategoryTitle;
