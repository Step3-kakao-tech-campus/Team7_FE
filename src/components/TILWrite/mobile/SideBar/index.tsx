import { motion } from 'framer-motion';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import Comment from '@/components/TILWrite/Comments';
import Reference from '@/components/TILWrite/Reference';
import RoadMapInfo from '@/components/TILWrite/RoadMap/RoadMapInfo';
import Step from '@/components/TILWrite/RoadMap/Step';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

const SideBar = (props: PropsWithChildren) => {
  const { children } = props;

  const [open, setOpen] = useState(false);
  const [referenceOpen, setReferenceOpen] = useState(false);

  const { query } = useRouter();
  const { steps } = useGetRoadmapSteps(Number(query.roadmapId));

  const handleMobileSideBar = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.Content asChild>
          <Styled.Content referenceOpen={referenceOpen}>
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
