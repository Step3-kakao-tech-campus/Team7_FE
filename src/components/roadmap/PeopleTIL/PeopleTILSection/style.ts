import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.section`
  width: 100%;
  padding: 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 48px;
  column-gap: 32px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

// PeopleTILSection.Empty
export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    border: none;
    box-shadow: none;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span:first-of-type {
    font-weight: 700;
    font-size: 1.375rem;
  }
`;

export const ButtonStyles = css`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

// PeopleTILSection.Skeleton
export const SkeletonCardStyles = (theme: EmotionTheme) => css`
  width: 20rem;
  height: 11rem;

  @media ${theme.mediaQuery.md} {
    width: 100%;
  }
`;

// PeopleTILSection.Fallback

export const FallbackContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 420px;
`;
