import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export interface ButtonProps {
  variant: 'primary' | 'outline' | 'ghost' | 'default';
  round: number;
  px: number;
  py: number;
  fullWidth: boolean;
  fontSize: number;
  cssProps?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ variant, theme }) => variantStyles[variant!](theme)}
  border-radius : ${({ round }) => `${round}px`};
  padding: ${({ px, py }) => `${py}rem ${px}rem`};
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

export const Text = styled.span``;

export const ImageContainer = styled.div``;

const variantStyles = {
  primary: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.rose};
    color: white;
  `,
  outline: (theme: EmotionTheme) => css`
    border: 1px solid ${theme.colors.gray_400};
    background-color: ${theme.colors.white};
  `,
  ghost: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.white};
  `,
  default: (theme: EmotionTheme) => css`
    border: none;
    background-color: ${theme.colors.black};
    color: white;
  `,
};
