import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { EmotionTheme } from '@/styles/emotion';

export const ButtonStyles = (theme: EmotionTheme) => css`
  padding: 0.65rem 0.9rem;
  font-weight: 600;

  @media ${theme.mediaQuery.md} {
    font-size: 14px;
  }

  @media ${theme.mediaQuery.xs} {
    font-size: 12px;
    padding: 8px;
  }
`;

export const RenderUserRole = styled.div`
  width: 140px;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 6px;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 120px;
    font-size: 14px;
  }
`;

export const SelectStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.xs} {
    width: 120px;
  }
`;
