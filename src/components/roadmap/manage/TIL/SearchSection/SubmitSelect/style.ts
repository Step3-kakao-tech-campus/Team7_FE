import { css } from '@emotion/react';
import type { EmotionTheme } from '@/styles/emotion';

export const SelectContainerStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.xs} {
    width: 100%;
  }
`;
