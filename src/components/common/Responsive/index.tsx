import { type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ResponsiveContext } from '@/components/common/Responsive/provider';
import { emotionTheme } from '@/styles/emotion';

interface ResponsiveProps {
  className?: string;
  device: Device;
  asChild?: boolean;
}

type Device = 'mobile' | 'desktop';

const Responsive = (props: PropsWithChildren<ResponsiveProps>) => {
  const { className = '', children, device, asChild } = props;

  const Comp = asChild ? Slot : 'div';

  const { mobileOnlyClassName, desktopOnlyClassName } = useContext(ResponsiveContext);
  const [current, setCurrent] = useState<Device | null>(null);

  const { mediaQuery } = emotionTheme;

  const selectedClassName = (() => {
    if (device === 'desktop') return desktopOnlyClassName;
    if (device === 'mobile') return mobileOnlyClassName;
  })();

  useEffect(() => {
    const mobileMedia = window.matchMedia(mediaQuery.md);

    if (mobileMedia.matches) {
      setCurrent('mobile');
    } else {
      setCurrent('desktop');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setCurrent(e.matches ? 'mobile' : 'desktop');
    };

    mobileMedia.addEventListener('change', handleChange);

    return () => mobileMedia.removeEventListener('change', handleChange);
  }, []);

  return current === null || device === current ? (
    <Comp className={`${selectedClassName} ${className}`}>{children}</Comp>
  ) : (
    <></>
  );
};

export default Responsive;
