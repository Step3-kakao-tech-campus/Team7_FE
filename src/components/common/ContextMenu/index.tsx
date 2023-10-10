import type { PropsWithChildren } from 'react';
import * as Styled from './style';

interface ContextMenuProps {
  className?: string;
}

const ContextMenu = (props: PropsWithChildren<ContextMenuProps>) => {
  const { children, className } = props;

  return <Styled.Root className={className}>{children}</Styled.Root>;
};

interface MenuProps {
  onClick?: () => void;
}

ContextMenu.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { children, onClick } = props;

  return <Styled.Menu onClick={onClick}>{children}</Styled.Menu>;
};

export default ContextMenu;
