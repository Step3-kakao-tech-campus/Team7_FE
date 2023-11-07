import { css } from '@emotion/react';
import type { EmotionTheme } from '@/styles/emotion';

export const SelectContainerStyles = (theme: EmotionTheme) => css`
  width: 15.625rem;

  @media ${theme.mediaQuery.xxs} {
    width: 200px;
  }
`;
