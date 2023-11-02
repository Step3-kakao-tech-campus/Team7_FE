import type { PropsWithChildren } from 'react';
import GNB from '@/components/common/GNB';

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
