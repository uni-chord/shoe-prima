import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FavoriteBorder,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Star,
  StarHalf,
  StarBorder,
} from '@mui/icons-material';
import Review from './Review';
import QuantityItemComponent from './QuantityItemComponent';

type SizeType = string;

interface Selection {
  size: string;
  color: string;
  quantity: number;
  price: number;
}

interface ColorRadioButtonProps {
  image: string;
}

interface ProductInfoProps {
  productId: string | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
  const [selections, setSelections] = useState<Selection[]>([]);

  const addSelection = (
    size: string,
    color: string,
    quantity: number,
    price: number,
  ) => {
    setSelections((prev: Selection[]) => [
      ...prev,
      { size, color, quantity, price },
    ]);
  };

  const colors = [
    { id: 'red', image: '/src/assets/testImg1.png' },
    { id: 'green', image: '/src/assets/testImg1.png' },
    { id: 'blue', image: '/src/assets/testImg1.png' },
  ];

  const price: number = 100000;

  const totalPrice = selections.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const [selectedColor, setSelectedColor] = useState('red');
  const handleColorSelection = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedSize(''); // 선택된 사이즈를 초기화
  };

  const [selectedSize, setSelectedSize] = useState(''); // 기본 선택 사이즈 none
  const sizes: SizeType[] = Array.from(
    { length: (290 - 220) / 5 + 1 },
    (_, i) => (220 + i * 5).toString(),
  );
  const disabledSizes = ['220', '225', '230']; // 비활성화할 사이즈 목록

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    // 기본 수량을 1로 설정하고, 현재 선택된 색상과 함께 addSelection 호출
    addSelection(newSize, selectedColor, 1, price);
  };

  const removeItem = (index: number) => {
    setSelections((prev) => prev.filter((_, i) => i !== index));
  };

  const decrementQuantity = (index: number) => {
    setSelections((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      }),
    );
  };

  const incrementQuantity = (index: number) => {
    setSelections((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const [isInfoOpen, setIsInfoOpen] = useState(true);

  const toggleInfoDetails = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const [isReviewOpen, setIsReviewOpen] = useState(true);

  const toggleReviewDetails = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const rating = 3.7; // 예시 점수
  const outOf = 5; // 별의 총 개수

  const filledStars = Math.floor(rating);
  const emptyStars = outOf - Math.ceil(rating);
  const halfStar = Math.ceil(rating) > filledStars ? 1 : 0;

  return (
    <div>
      <ProductInfoArea>
        <ProductInfoMain>
          <ProductNameArea>
            <ProductName>상품 이름</ProductName>
          </ProductNameArea>

          <ProductDetailsArea>
            <ProductPrice>{price.toLocaleString()}원</ProductPrice>
            <LikeButton>
              <FavoriteBorder />
            </LikeButton>
          </ProductDetailsArea>
        </ProductInfoMain>

        <OptionArea>
          <ColorSelectorContainer>
            <Title>색상</Title>
            <Colors>
              {colors.map((color) => (
                <React.Fragment key={color.id}>
                  <input
                    type="radio"
                    id={`color-${color.id}`}
                    name="color"
                    value={color.id}
                    style={{ display: 'none' }}
                    checked={selectedColor === color.id}
                    onChange={() => handleColorSelection(color.id)}
                  />
                  <ColorRadioButton
                    htmlFor={`color-${color.id}`}
                    image={color.image}
                  ></ColorRadioButton>
                </React.Fragment>
              ))}
            </Colors>
          </ColorSelectorContainer>
        </OptionArea>

        <OptionArea>
          <SizeHeadlineContainer>
            <Title>사이즈 선택</Title>
            <SizeButton>사이즈 정보</SizeButton>
          </SizeHeadlineContainer>
          <Label htmlFor="shoeSize"></Label>
          <FormToggle>
            {sizes.map((size, index) => (
              <RadioBtn
                key={index}
                checked={selectedSize === size}
                disabled={disabledSizes.includes(size)}
              >
                <Input
                  id={`size-${size}`}
                  type="radio"
                  name="shoeSize"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                  disabled={disabledSizes.includes(size)}
                />
                {size}
              </RadioBtn>
            ))}
          </FormToggle>
        </OptionArea>
        <OptionArea>
          <QuantityArea>
            <Title>수량</Title>
            {selections.map((item, index) => (
              <QuantityItemComponent
                key={index}
                item={item}
                index={index}
                removeItem={removeItem}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            ))}
          </QuantityArea>
        </OptionArea>

        <TotalPriceArea>
          <Total>합계</Total>
          <TotalPrice>{`${totalPrice.toLocaleString()}원`}</TotalPrice>
        </TotalPriceArea>
        <ButtonArea>
          <Button1>장바구니</Button1>
          <Button2>바로구매</Button2>
        </ButtonArea>

        <DetailsArea>
          <ToggleButton onClick={toggleInfoDetails}>
            상품 상세 정보{' '}
            {isInfoOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </ToggleButton>
          {isInfoOpen && (
            <DetailsContainer>
              <Details>스타일 코드</Details> <Details>abcdef</Details>
              <Details>제조국</Details> <Details>abcdef</Details>
              <Details>제조년월</Details> <Details>abcdef</Details>
              <Details>판매원</Details> <Details>abcdef</Details>
              <Details>제품 특징</Details>
              <Details>
                Lorem ipsum dolor sit amet consectetur. Suspendisse quisque in a
                odio morbi. Amet interdum eros vulputate eget. Vulputate diam
                nisl tellus purus. Fermentum nisi nunc ultrices natoque.
              </Details>
            </DetailsContainer>
          )}
        </DetailsArea>
        <ReviewArea>
          <ToggleButton onClick={toggleReviewDetails}>
            상품 리뷰 (1){' '}
            {isReviewOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </ToggleButton>
          {isReviewOpen && (
            <ReviewContainer>
              <StarContainer>
                {Array(filledStars)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} />
                  ))}
                {halfStar ? <StarHalf /> : null}
                {Array(emptyStars)
                  .fill(null)
                  .map((_, i) => (
                    <StarBorder key={i} />
                  ))}
              </StarContainer>
              <Rating>{rating.toFixed(1)}점</Rating>
              <Button1>리뷰 작성</Button1>
              <Review reviewId="1"></Review>
              <Review reviewId="2"></Review>
            </ReviewContainer>
          )}
        </ReviewArea>
      </ProductInfoArea>
    </div>
  );
};

const ProductInfoArea = styled.div`
  display: flex;
  width: 35rem;
  padding-left: 2.5rem;
  flex-direction: column;

  border-left: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const ProductInfoMain = styled.div`
  padding-bottom: 2rem;
  gap: 1.25rem;
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const ProductDetailsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductNameArea = styled.div`
  margin-bottom: 1rem;
`;

const ProductName = styled.div`
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

const ProductPrice = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const LikeButton = styled.div`
  cursor: pointer;

  svg {
    font-size: var(--title--title3--regular);
  }
`;

const OptionArea = styled.div`
  display: flex;
  padding: 1.5rem 0px;
  flex-direction: column;
`;

const ColorSelectorContainer = styled.div``;

const Title = styled.div`
  margin-bottom: 1.125rem;
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

const Colors = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const ColorRadioButton = styled.label<ColorRadioButtonProps>`
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color---lightgray300, #e5e5e5);
  cursor: pointer;
  background-image: url(${(props) => props.image});
  background-size: cover; // 이미지가 버튼 크기에 맞게 조절
  box-sizing: border-box;

  &:hover {
    border-color: #ccc; // 호버 시 보더 색상 변경
  }

  input[type='radio'] {
    display: none; // 라디오 버튼 숨기기
  }

  input[type='radio']:checked + & {
    border: 1px solid var(--color---black900, #222);
  }
`;

const SizeHeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SizeButton = styled.div`
  cursor: pointer;

  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body2/underline */
  font-family: Pretendard;
  font-size: var(--font-size---body2-font-size, 15px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
  text-decoration-line: underline;
`;

const Label = styled.label``;

const RadioBtn = styled.label<{ checked: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 3rem;
  padding: 0.8125rem 0.625rem;
  border-radius: var(--border-radius---border-radius-xs, 4px);
  border: 1px solid
    ${(props) =>
      props.disabled
        ? 'var(--color---lightgray300, #E5E5E5)'
        : props.checked
          ? 'var(--color---black900, #222)'
          : 'var(--color---lightgray300, #e5e5e5)'};
  background: ${(props) =>
    props.disabled
      ? 'var(--color---lightgray200, #F4F4F4)'
      : props.checked
        ? 'var(--color---white900, #FFF)'
        : 'transparent'};
  color: ${(props) => (props.disabled ? '#ccc' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;
  flex: 1 1 auto;
`;

const Input = styled.input`
  display: none;
`;

const FormToggle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 한 줄에 5개의 아이템
  gap: 0.5rem;
`;

const QuantityArea = styled.div`
  padding: 1rem;
  border-top: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const TotalPriceArea = styled.div`
  display: flex;
  padding: 2.25rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-top: 3px solid var(--color---gray900, #373737);
`;

const Total = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* heading/heading2/bold */
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const TotalPrice = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* title/title3/bold */
  font-family: Pretendard;
  font-size: var(--font-size---title3-font-size, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const ButtonArea = styled.div`
  display: flex;
  padding: 0.375rem 0rem;
  padding-bottom: 2.25rem;
  justify-content: space-between;
  gap: 8px;
`;

const Button1 = styled.button`
  flex: 1;

  padding: 0.9375rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: var(--border-radius---border-radius-s, 8px);
  border: 1px solid var(--color---lightgray300, #e5e5e5);
  background-color: var(--white--900);

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;

  cursor: pointer;
`;

const Button2 = styled.button`
  flex: 1;

  padding: 0.9375rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: var(--border-radius---border-radius-s, 8px);
  background: var(--color---black900, #222);
  border: 1px solid var(--color---lightgray300, #e5e5e5);

  color: var(--white-900, var(--color---white900, #fff));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  grid-template-columns: 1fr 4fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const ToggleButton = styled.button`
  display: flex; // Flex 컨테이너로 설정
  justify-content: space-between; // 내부 요소를 양 끝으로 정렬
  align-items: center; // 세로 중앙 정렬
  width: 100%; // 버튼의 너비를 조정하려면 추가

  border: none;
  background-color: var(--white-900);
  cursor: pointer;

  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  font-family: Pretendard;
  font-size: var(--font-size---heading2-font-size, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const DetailsArea = styled.div`
  display: flex;
  padding: 1.75rem 0rem;
  flex-direction: column;
  gap: 28px;
  align-self: stretch;

  border-top: 1px solid var(--color---lightgray300, #e5e5e5);
  border-bottom: 1px solid var(--color---lightgray300, #e5e5e5);
`;

const Details = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* body/body3/reading */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;
`;

const ReviewArea = styled.div`
  display: flex;
  padding: 1.75rem 0rem;
  flex-direction: column;
  gap: 1/75rem;
  align-self: stretch;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem;
`;

const Rating = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline2/regular */
  font-family: Pretendard;
  font-size: var(--font-size---headline2-font-size, 17px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.17px;

  padding-bottom: 1rem;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProductInfo;
