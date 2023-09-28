import type { PropsWithChildren } from 'react';
import * as Styled from './style';

const Tab = (props: PropsWithChildren) => {
  const { children } = props;

  return <Styled.Root>{children}</Styled.Root>;
};

interface MenuProps {
  className?: string;
  onClick?: () => void;
}

Tab.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { className, onClick, children } = props;

  return (
    <Styled.Menu className={className} onClick={onClick}>
      {children}
    </Styled.Menu>
  );
};

export default Tab;
