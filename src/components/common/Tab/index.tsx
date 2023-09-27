import type { PropsWithChildren } from 'react';
import * as Styled from './style';

const Tab = (props: PropsWithChildren) => {
  const { children } = props;

  return <Styled.Root>{children}</Styled.Root>;
};

interface MenuProps {
  className?: string;
}

Tab.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { className, children } = props;

  return <Styled.Menu className={className}>{children}</Styled.Menu>;
};

export default Tab;
