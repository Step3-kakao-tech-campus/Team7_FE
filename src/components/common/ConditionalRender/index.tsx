import type { PropsWithChildren } from 'react';

interface ConditionalRenderProps {
  data: Array<any>;
  EmptyUI: React.ReactNode;
}

const ConditionalRender = (props: PropsWithChildren<ConditionalRenderProps>) => {
  const { data, EmptyUI, children } = props;

  return <>{data.length === 0 ? EmptyUI : children}</>;
};

export default ConditionalRender;
