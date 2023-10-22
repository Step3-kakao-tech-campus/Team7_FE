import type { PropsWithChildren, ForwardRefExoticComponent, RefAttributes, FunctionComponent } from 'react';
import { forwardRef } from 'react';
import React from 'react';
import * as Styled from './style';

interface ContextMenuProps {
  className?: string;
}

interface ExtendedContextMenuComponent
  extends ForwardRefExoticComponent<PropsWithChildren<ContextMenuProps> & RefAttributes<HTMLDivElement>> {
  Menu: FunctionComponent<PropsWithChildren<MenuProps>>;
}

const ContextMenu = forwardRef<HTMLDivElement, PropsWithChildren<ContextMenuProps>>((props, ref) => {
  const { children, className } = props;

  return (
    <Styled.Root ref={ref} className={className}>
      {children}
    </Styled.Root>
  );
}) as ExtendedContextMenuComponent;

interface MenuProps {
  onClick?: () => void;
}

ContextMenu.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { children, onClick } = props;

  return <Styled.Menu onClick={onClick}>{children}</Styled.Menu>;
};

export default ContextMenu;
