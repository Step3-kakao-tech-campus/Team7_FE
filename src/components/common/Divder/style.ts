import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { DividerProps } from '@/components/common/Divder';
import type { EmotionTheme } from '@/styles/emotion';

type StyledDividerProps = Required<Pick<DividerProps, 'percent' | 'direction'>>;

export const getDirectionStyles = (props: StyledDividerProps) => {
  const { percent, direction } = props;

  const directStyles = {
    row: (theme: EmotionTheme) => css`
      border-bottom: 1px solid ${theme.colors.gray_500};
      width: ${percent}%;
    `,
    col: (theme: EmotionTheme) => css`
      border-left: 1px solid ${theme.colors.gray_500};
      width: 1px;
      height: ${percent}%;
    `,
  };

  return directStyles[direction];
};

export const Divider = styled.div``;
