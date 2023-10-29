import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SkeletonBox from '@/components/common/Skeleton';
import type { EmotionTheme } from '@/styles/emotion';

export const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 50%;
  }

  @media (max-width: 760px) {
    flex-wrap: wrap-reverse;

    & > div {
      width: 100%;
    }

    & > form {
      width: 100%;
    }
  }
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 275px;
  font-size: 16px;
  border-radius: 100px;
  padding: 4px 14px;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const RoadmapContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const Skeleton = styled(SkeletonBox)`
  width: 211px;
  height: 230px;
`;
