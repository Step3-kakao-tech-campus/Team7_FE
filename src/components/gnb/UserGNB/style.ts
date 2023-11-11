import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.layer.header};

  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

export const BellowRoot = styled.div`
  height: ${({ theme }) => theme.layout.main.GNBHeight};
`;

export const Inner = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 8px;
  }

  & > div > button {
    z-index: 20;
    &:hover {
      visibility: hidden;
    }
  }
`;

export const TILInfo = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray_200};
  padding: 1rem;
  border-radius: 1rem;
  font-size: 15px;

  & > span:nth-of-type(2) {
    /* color: ${({ theme }) => theme.colors.rose}; */
    color: #db0f38;
  }
`;

export const TILButtonStyles = (theme: EmotionTheme) => css`
  font-size: 1.25rem;
  font-weight: 700;

  @media ${theme.mediaQuery.md} {
    margin-right: 8px;
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

export const RefContainer = styled.div``;
