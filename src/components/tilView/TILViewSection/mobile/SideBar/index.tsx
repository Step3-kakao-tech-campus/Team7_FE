import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Icon from '@/components/common/Icon';
import Comment from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Comments';
import * as Styled from './style';

const SideBar = (props: PropsWithChildren) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.Content asChild>
          <Styled.Content>
            <Icon
              iconName="ic_close"
              imageSize={20}
              alt="닫기"
              ext="svg"
              onClick={() => setOpen(false)}
              css={Styled.CloseButtonStyles}
            />

            <Styled.Header>
              <Styled.TabName isActive={true}>코멘트</Styled.TabName>
            </Styled.Header>

            <Comment handleCloseCommentAside={() => setOpen(false)} />
          </Styled.Content>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default SideBar;
