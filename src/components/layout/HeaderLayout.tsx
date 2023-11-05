import type { FC, PropsWithChildren } from 'react';
import GNB from '../common/GNB';

const HeaderLayout: FC = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <GNB />
      {children}
    </>
  );
};

export default HeaderLayout;
