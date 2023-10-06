import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 200px;
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
