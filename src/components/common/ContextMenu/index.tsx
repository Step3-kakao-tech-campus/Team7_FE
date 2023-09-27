import type { PropsWithChildren } from 'react';
import * as Styled from './style';

const ContextMenu = (props: PropsWithChildren) => {
  const { children } = props;
  return <Styled.Root>{children}</Styled.Root>;
};

interface MenuProps {
  onClick?: () => void;
}

ContextMenu.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { children, onClick } = props;

  return <Styled.Menu onClick={onClick}>{children}</Styled.Menu>;
};

export default ContextMenu;
