import { type PropsWithChildren, useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import * as Styled from './style';

interface TabProps {
  className?: string;
}

const Tab = (props: PropsWithChildren<TabProps>) => {
  const { children, className } = props;

  return (
    <Styled.Root data-testid="tab" className={className}>
      {children}
    </Styled.Root>
  );
};

interface MenuProps {
  className?: string;
  onClick?: () => void;
  isTooltip?: boolean;
  tooltipContent?: () => ReactNode;
}

Tab.Menu = function Menu(props: PropsWithChildren<MenuProps>) {
  const { className, onClick, children, isTooltip = true, tooltipContent = () => <></> } = props;

  const [tooltip, setTooltip] = useState<boolean>(false);

  const infoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const info = infoRef.current;
    if (isTooltip && info) {
      info.addEventListener('mouseover', () => {
        setTooltip(true);
      });
      info.addEventListener('mouseout', () => {
        setTooltip(false);
      });
    }
    return () => {
      if (isTooltip && info) {
        info.removeEventListener('mouseover', () => {
          setTooltip(true);
        });
        info.removeEventListener('mouseout', () => {
          setTooltip(false);
        });
      }
    };
  }, [isTooltip]);

  return (
    <Styled.Menu className={className} onClick={onClick}>
      {tooltip && <Styled.TooltipBox>{tooltipContent()}</Styled.TooltipBox>}
      {isTooltip && <Image ref={infoRef} src="/assets/icons/ic_info.svg" width={15} height={15} alt="탭 정보 툴팁" />}
      {children}
    </Styled.Menu>
  );
};

export default Tab;
