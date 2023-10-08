import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import * as Styled from './style';

export interface CardProps {
  className?: string;
}

const Card = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>((props, ref) => {
  const { children, className } = props;

  return (
    <Styled.Card ref={ref} className={className}>
      {children}
    </Styled.Card>
  );
});

export default Card;
