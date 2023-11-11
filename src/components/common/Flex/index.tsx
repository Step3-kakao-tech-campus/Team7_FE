import type { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface Props {
  dir?: 'row' | 'col';
  gap?: number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  children: ReactNode;
  margin?: number | string;
  fullWidth?: boolean;
}

const Flex = styled.section<Props>`
  display: flex;
  flex-direction: ${({ dir }) => (dir === 'col' ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap = 0 }) => `${gap}rem`};
  width: ${({ fullWidth }) => fullWidth && '100%'};
  margin: ${({ margin = 0 }) => (typeof margin === 'string' ? margin : `${margin}rem`)};
`;

export default Flex;
