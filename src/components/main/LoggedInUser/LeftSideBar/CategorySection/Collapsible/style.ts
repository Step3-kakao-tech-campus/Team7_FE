import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div``;

export const HeaderRoot = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 16rem;
    font-size: 1.1rem;
    font-weight: 700;

    cursor: pointer;

    & > img {
      transition: transform 0.3s;

      ${isActive &&
      css`
        transform: rotate(-180deg);
      `}
    }
  `};
`;

export const ItemRoot = styled.div<{ isActive: boolean; rootHeight: number }>`
  overflow: hidden;
  max-height: ${({ isActive, rootHeight }) => (isActive ? `${rootHeight}px` : '0px')};
  padding-left: 1rem;
  transition: max-height 0.2s ease-out;
  & > * {
    margin: 1.3rem 0;
  }
  cursor: pointer;
`;
