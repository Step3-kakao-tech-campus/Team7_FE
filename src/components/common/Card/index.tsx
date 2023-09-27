import type { PropsWithChildren } from 'react';
import * as Styled from './style';

export interface CardProps {
  className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, className } = props;

  return <Styled.Card className={className}>{children}</Styled.Card>;
};

export default Card;
