import type { PropsWithChildren, FC } from 'react';

const EmptyLayout: FC = (props: PropsWithChildren) => {
  const { children } = props;
  return <>{children}</>;
};

export default EmptyLayout;
