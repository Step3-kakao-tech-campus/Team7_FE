import type { PropsWithChildren } from 'react';
import * as Styled from '@/components/common/InfoArea/style';

export interface InfoAreaProps {
  textAlign?: 'center' | 'left' | 'right';
  isDot?: boolean;
}

const InfoArea = (props: PropsWithChildren<InfoAreaProps>) => {
  const { textAlign = 'left', isDot = true, children } = props;

  return (
    <Styled.Root textAlign={textAlign} isDot={isDot}>
      {children}
    </Styled.Root>
  );
};

InfoArea.Info = function Info(props: PropsWithChildren) {
  const { children } = props;

  return <Styled.Info>{children}</Styled.Info>;
};

export default InfoArea;
