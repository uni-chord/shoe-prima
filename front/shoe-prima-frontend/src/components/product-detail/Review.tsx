import styled from 'styled-components';
import { useState } from 'react';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';

interface ReviewProps {
  reviewId: string | undefined;
}

interface ReviewContentProps {
  expanded: boolean;
}

const Review: React.FC<ReviewProps> = ({ reviewId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const rating = 4; // 예시 점수
  const outOf = 5; // 별의 총 개수

  const filledStars = Math.floor(rating);
  const emptyStars = outOf - Math.ceil(rating);
  const halfStar = Math.ceil(rating) > filledStars ? 1 : 0;

  return (
    <>
      <ReviewContainer>
        <ReviewTitle>리뷰 제목</ReviewTitle>
        <ReviewRating>
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
        </ReviewRating>
        <ReviewWriter>리뷰 작성자 · YYYY년 MM월 DD일</ReviewWriter>
        <ReviewContent expanded={isExpanded}>
          Lorem ipsum dolor sit amet consectetur. Suspendisse quisque in a odio
          morbi. Amet interdum eros vulputate eget. Vulputate diam nisl tellus
          purus. Fermentum nisi nunc ultrices natoque. Lorem ipsum dolor sit
          amet consectetur. Suspendisse quisque in a odio morbi. Amet interdum
          eros vulputate eget. Vulputate diam nisl tellus purus. Fermentum nisi
          nunc ultrices natoque.
        </ReviewContent>
        <MoreButton onClick={toggleExpanded}>
          {isExpanded ? '접기' : '더 보기'}
        </MoreButton>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1.5rem 0rem;

  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

const ReviewTitle = styled.div`
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;

  /* headline/headline1/bold */
  font-family: Pretendard;
  font-size: var(--font-size---headline1-font-size, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const ReviewWriter = styled.div`
  color: var(--gray-500, var(--color---gray500, #808080));
  font-feature-settings: 'calt' off;

  /* body/body3/regular */
  font-family: Pretendard;
  font-size: var(--font-size---body3-font-size, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ReviewContent = styled.div<ReviewContentProps>`
  overflow: hidden;
  color: var(--black-900, var(--color---black900, #222));
  font-feature-settings: 'calt' off;
  text-overflow: ellipsis;
  width: 100%;

  display: ${({ expanded }) => (expanded ? 'block' : '-webkit-box')};
  -webkit-box-orient: ${({ expanded }) => (expanded ? 'unset' : 'vertical')};
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'unset' : 3)};
  line-height: 1.625rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : '4.875rem')};

  /* body/body1/reading */
  font-family: Pretendard;
  font-size: var(--font-size---body1-font-size, 16px);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.16px;
`;

const MoreButton = styled.div`
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

export default Review;
