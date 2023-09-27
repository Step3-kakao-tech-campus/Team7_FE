import { css } from '@emotion/react';
import type { EmotionTheme } from '@/styles/emotion';

export type ButtonStyle = 'primary' | 'outline' | 'ghost' | 'default';

export const buttonStyles = {
  primary: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.rose};
    color: white;
  `,
  outline: (theme: EmotionTheme) => css`
    border: 1px solid ${theme.colors.gray_400};
    background-color: ${theme.colors.white};

    &:disabled {
      color: ${theme.colors.white};
      border: none;
    }
  `,
  ghost: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.white};

    &:disabled {
      color: ${theme.colors.white};
    }
  `,
  default: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.black};
    color: white;
  `,
};
