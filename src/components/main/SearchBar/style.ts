import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.form``;

export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 16.875em;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0.75rem 0.8rem;
  margin-top: 2.125rem;

  @media ${theme.mediaQuery.md} {
    margin-top: 20px;
    width: 100%;
  }
`;

export const InputStyles = (theme: EmotionTheme) => css`
  &::placeholder {
    color: ${theme.colors.gray_800};
  }
`;
