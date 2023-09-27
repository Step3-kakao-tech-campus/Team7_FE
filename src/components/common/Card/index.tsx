import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface CardProps {
  className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, className } = props;

  return <Root className={className}>{children}</Root>;
};

export default Card;

const Root = styled.div`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(174, 174, 174, 0.25);
`;
