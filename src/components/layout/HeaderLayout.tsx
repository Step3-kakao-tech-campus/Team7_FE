import type { PropsWithChildren } from 'react';
import GNB from '@/components/gnb/UserGNB';

const HeaderLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <GNB />
      {children}
    </>
  );
};

export default HeaderLayout;
