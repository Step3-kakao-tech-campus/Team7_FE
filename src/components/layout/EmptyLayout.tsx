import { type FC, type ReactNode } from 'react';

interface EmptyLayoutProps {
  children: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default EmptyLayout;
