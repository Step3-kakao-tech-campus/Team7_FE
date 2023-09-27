import type { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  dir?: 'row' | 'col';
  gap?: number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  children: ReactNode;
  margin?: number | string;
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ dir }) => (dir === 'col' ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap = 0 }) => `${gap}px`};
  margin: ${({ margin = 0 }) => (typeof margin === 'string' ? margin : `${margin}px`)};
`;

export default Flex;
