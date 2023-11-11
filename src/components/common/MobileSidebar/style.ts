import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

// 모바일
export const UserName = styled.div`
  display: flex;
  align-items: center;
  & > span:first-of-type {
    font-size: 20px;
    font-weight: 700;
  }

  & > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const LayoutElement = styled.div`
  width: 24px;
  height: 24px;
`;

export const MenuBarStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.md} {
    display: flex !important;
    justify-content: space-between;
    position: sticky;
    z-index: 1;
    top: ${theme.layout.main.GNBHeight};
    width: 100%;
    padding: 16px;
    background-color: #fff;
    border-bottom: 1px solid ${theme.colors.gray_500};
  }
`;
