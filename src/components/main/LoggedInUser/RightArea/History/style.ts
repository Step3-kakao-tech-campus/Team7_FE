import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div``;

export const Wrapper = styled.div`
  background-color: #fff;
  width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;

  // 히스토리가 반응형 크기에 맞게 줄어들게 하기 위해서 넣은 css
  & > div {
    width: 20px;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    min-width: 1000px;
  }
`;

export const SkeletonStyles = css`
  width: 930px !important;
  height: 150px;
`;

export const HistoryTitle = styled.h1`
  background-color: #fff;
  margin-bottom: 20px;

  & > span:nth-of-type(1) {
    font-size: 2rem;
    margin-right: 1px;
  }

  & > span:nth-of-type(2) {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
