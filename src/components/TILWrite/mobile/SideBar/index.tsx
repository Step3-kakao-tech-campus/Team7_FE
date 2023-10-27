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
  const [active, setActive] = useState<'roadmap' | 'comment'>('roadmap');
  const [referenceOpen, setReferenceOpen] = useState(false);

  const { query } = useRouter();
  const { steps } = useGetRoadmapSteps(Number(query.roadmapId));

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
              <Styled.TabName isActive={active === 'roadmap'} onClick={() => setActive('roadmap')}>
                로드맵
              </Styled.TabName>
              <Styled.TabName isActive={active === 'comment'} onClick={() => setActive('comment')}>
                코멘트
              </Styled.TabName>
            </Styled.Header>

            <RoadMapInfo handleCloseAside={() => setOpen(false)} />

            <Styled.StepList>
              {steps?.result.steps.map((step) => {
                return (
                  <Step
                    key={step.id}
                    stepId={step.id}
                    title={step.title}
                    isCompleted={step.isCompleted}
                    tilId={step.tilId}
                    handleOpenReferenceAside={() => setReferenceOpen(true)}
                  />
                );
              })}
            </Styled.StepList>

            {/* <Reference
              handleCloseReferenceAside={() => {
                setOpen(false);
                setReferenceOpen(false);
              }}
            /> */}

            {/* {referenceOpen && (
              <Reference
                handleCloseReferenceAside={() => {
                  setOpen(false);
                  setReferenceOpen(false);
                }}
              />
            )} */}

            {/* <Comment handleCloseCommentAside={() => setOpen(false)} /> */}
          </Styled.Content>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default SideBar;
