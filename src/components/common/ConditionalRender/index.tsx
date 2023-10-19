import type { PropsWithChildren } from 'react';

interface ConditionalRenderProps {
  data?: Array<any>;
  EmptyUI: React.ReactNode;
}

const ConditionalRender = (props: PropsWithChildren<ConditionalRenderProps>) => {
  const { data, EmptyUI, children } = props;

  if (!data) {
    return null;
  }

  return <>{data.length === 0 ? EmptyUI : children}</>;
};

export default ConditionalRender;
