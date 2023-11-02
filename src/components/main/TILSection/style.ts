import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-left: 2.6rem;
  margin-top: 1.5rem;
  margin: 1.5rem 0 0 1.5rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10px 0 0 0;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkeletonStyles = (theme: EmotionTheme) => css`
  width: 16.875rem;
  height: 9.375rem;

  padding: 1.25rem;

  @media ${theme.mediaQuery.md} {
    width: 100%;
  }
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 850px;
  height: 500px;
  margin-left: 2.5rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    margin-left: 0;
    grid-column: 1 / 3;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;

  & > span:first-of-type {
    font-weight: 700;
  }

  & > span:last-of-type {
    margin-top: 0.5rem;
    font-weight: 700;
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    font-size: 16px;
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;
