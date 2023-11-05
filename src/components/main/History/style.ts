import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div``;

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.mediaQuery.md} {
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    border-radius: 6px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    min-width: 1000px;
  }
`;

export const SkeletonStyles = css`
  width: 930px;
  height: 150px;
`;

export const HistoryTitle = styled.h1`
  & > span:nth-of-type(1) {
    font-size: 2rem;
    margin-right: 1px;
  }

  & > span:nth-of-type(2) {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
