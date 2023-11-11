import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.form``;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  width: 16.875em;
  padding: 0.75rem 0.8rem;
  margin-top: 2.125rem;
  border-radius: 20px;
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  font-size: 1rem;

  @media ${theme.mediaQuery.md} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const InputStyles = (theme: EmotionTheme) => css`
  &::placeholder {
    color: ${theme.colors.gray_800};
  }
`;
