import { memo, type PropsWithChildren } from 'react';
import * as Styled from '@/components/common/MobileSidebar/style';
import Responsive from '@/components/common/Responsive';

const MobileSidebar = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Responsive device="mobile" css={Styled.MenuBarStyles}>
      {children}
      <Styled.LayoutElement />
    </Responsive>
  );
};

export default memo(MobileSidebar);
