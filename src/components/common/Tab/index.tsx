import type { PropsWithChildren } from 'react';
import * as Styled from './style';

interface TabProps {
  className?: string;
}

const Tab = (props: PropsWithChildren<TabProps>) => {
  const { children, className } = props;

  return <Styled.Root className={className}>{children}</Styled.Root>;
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
