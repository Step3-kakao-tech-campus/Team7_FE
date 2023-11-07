import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.form`
  position: relative;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;

    grid-column: 1 / 3;
  }
`;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 100%;
  font-size: 1rem;
  border-radius: 20px;
  padding: 10px 13px;
  margin: 0;
`;

export const InputStyles = (theme: EmotionTheme) => css`
  &::placeholder {
    color: ${theme.colors.gray_800};
  }

  @media ${theme.mediaQuery.xs} {
    font-size: 14px;
  }
`;

export const ResetButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
