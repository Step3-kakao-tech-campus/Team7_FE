import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import * as Styled from './style';

export interface CardProps {
  className?: string;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>((props, ref) => {
  const { children, className, onClick } = props;

  return (
    <Styled.Card ref={ref} className={className} onClick={onClick}>
      {children}
    </Styled.Card>
  );
});

export default Card;
