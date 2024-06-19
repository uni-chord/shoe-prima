import React, { useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface ProductProps {
  productId: string | undefined;
}

const Product: React.FC<ProductProps> = ({ productId }) => {
  const images = [
    '/src/assets/testImg1.png',
    '/src/assets/testImg1.png',
    '/src/assets/testImg1.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <ProductImgArea>
      <SlideButton onClick={prevSlide} left>
        <KeyboardArrowLeft />
      </SlideButton>
      <img src={images[currentImageIndex]} alt="Product Image" />
      <SlideButton onClick={nextSlide}>
        <KeyboardArrowRight />
      </SlideButton>
      <PaginationContainer>
        {images.map((src, index) => (
          <PaginationButton
            key={index}
            active={index === currentImageIndex}
            onClick={() => setCurrentImageIndex(index)}
            image={src}
          />
        ))}
      </PaginationContainer>
    </ProductImgArea>
  );
};

const ProductImgArea = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 2.5rem;

  img {
    width: 560px;
    display: block;
  }
`;

const SlideButton = styled.button<{ left?: boolean }>`
  cursor: pointer;
  border: none;
  background: none;
  color: black;
  font-size: 24px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: 10px;' : 'right: 10px;')}
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const PaginationButton = styled.button<{ active: boolean; image: string }>`
  width: 85px;
  height: 85px;
  border: none;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: ${({ active }) =>
    active ? '1px solid var(--color---lightgray300, #E5E5E5)' : 'none'};
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  &:hover {
    opacity: 0.75;
  }
`;

export default Product;
