import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.layer.header};

  ${({ theme, isScrolled }) =>
    isScrolled &&
    css`
      background-color: #fff;
      border-bottom: 1px solid ${theme.colors.gray_500};
    `}

  transition: background-color 0.2s ease-in-out;
`;

export const BellowRoot = styled.div`
  height: ${({ theme }) => theme.layout.main.GNBHeight};
`;

export const Inner = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 72px;
  margin: 0 auto;
  padding: 0 32px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    height: 60px;
    padding: 0 8px;
  }
`;

export const ButtonStyles = (theme: EmotionTheme) => css`
  margin-right: 6px;
  font-weight: 500;

  @media ${theme.mediaQuery.md} {
    background-color: transparent;
    font-weight: 700;
  }
`;
