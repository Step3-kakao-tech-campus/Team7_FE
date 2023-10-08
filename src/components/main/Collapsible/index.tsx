import { type PropsWithChildren, type ButtonHTMLAttributes, useState, useRef, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import * as Styled from './style';

const Collapsible = (props: PropsWithChildren) => {
  const { children } = props;

  const [isActive, setIsActive] = useState(false);

  const toggleContent = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (index === 0) {
          return (
            // React.isValidElement => React.cloneElement 사용을 위한 가드, children이 존재하는지 유효한지 확인
            React.isValidElement<CollapsibleHeaderProps>(child) &&
            React.cloneElement(child, { isActive, onClick: toggleContent })
          );
        } else if (index === 1) {
          return React.isValidElement<CollapsibleItemProps>(child) && React.cloneElement(child, { isActive });
        }
      })}
    </>
  );
};

export interface CollapsibleHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

Collapsible.Header = function Header(props: PropsWithChildren<CollapsibleHeaderProps>) {
  const { children, isActive = false, ...rest } = props;

  return (
    <Styled.HeaderRoot isActive={isActive} {...rest}>
      <div>{children}</div>
      <Image src={`/assets/icons/ic_chevronDownBlack.svg`} alt="" width={16} height={16} />
    </Styled.HeaderRoot>
  );
};

export interface CollapsibleItemProps {
  isActive?: boolean;
  className?: string;
}

Collapsible.Item = function Item(props: PropsWithChildren<CollapsibleItemProps>) {
  const { children, isActive = false, className } = props;
  const [rootHeight, setRootHeight] = useState(0);
  const itemRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRootRef.current) {
      const height = itemRootRef.current.scrollHeight; // 스크롤로 숨겨진 부분까지 높이로 계산하기 위함.
      setRootHeight(height);
    }
  }, [children]);

  return (
    <Styled.ItemRoot rootHeight={rootHeight} ref={itemRootRef} isActive={isActive} className={className}>
      {children}
    </Styled.ItemRoot>
  );
};

export default Collapsible;
