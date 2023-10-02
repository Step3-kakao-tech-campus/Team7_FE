import { type PropsWithChildren, type ButtonHTMLAttributes, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import * as Styled from './style';

const Collapsible = (props: PropsWithChildren) => {
  const { children } = props;

  return <>{children}</>;
};

export interface CollapsibleHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

Collapsible.Header = function Header(props: PropsWithChildren<CollapsibleHeaderProps>) {
  const { children, isActive, ...rest } = props;

  return (
    <Styled.HeaderRoot isActive={isActive} {...rest}>
      <div>{children}</div>
      <Image src={`/assets/icons/ic_chevronDownBlack.svg`} alt="" width={12} height={12} />
    </Styled.HeaderRoot>
  );
};

export interface CollapsibleItemProps {
  isActive: boolean;
  className?: string;
}

Collapsible.Item = function Item(props: PropsWithChildren<CollapsibleItemProps>) {
  const { children, isActive, className } = props;
  const [rootHeight, setRootHeight] = useState(0);

  const itemRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRootRef.current) {
      const height = itemRootRef.current.scrollHeight; // 스크롤로 숨겨진 부분까지 높이로 계산하기 위함.
      setRootHeight(height);
    }
  }, []);

  return (
    <Styled.ItemRoot rootHeight={rootHeight} ref={itemRootRef} isActive={isActive} className={className}>
      {children}
    </Styled.ItemRoot>
  );
};

export default Collapsible;
