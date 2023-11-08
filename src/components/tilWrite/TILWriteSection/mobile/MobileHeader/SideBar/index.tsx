import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import Icon from '@/components/common/Icon';
import Comment from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Comments';
import Reference from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference';
import RoadMapInfo from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/RoadMap/RoadMapInfo';
import Step from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/RoadMap/Step';
import * as Styled from './style';

interface SideBarProps {
  autoSavedTimeHandler: {
    activeAutoSave: () => void;
    clearAutoSave: () => void;
  };
}

const SideBar = (props: PropsWithChildren<SideBarProps>) => {
  const { children, autoSavedTimeHandler } = props;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<'roadmap' | 'comment'>('roadmap');
  const [referenceOpen, setReferenceOpen] = useState(false);
  const [stepTitle, setStepTitle] = useState<string>('');

  const { query } = useRouter();
  const { steps } = useGetRoadmapSteps(Number(query.roadmapId));

  const handleMobileSideBar = () => {
    setOpen(false);
  };

  const handleStepTitle = (title: string) => {
    setStepTitle(title);
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
              <Styled.TabName isActive={active === 'roadmap'} onClick={() => setActive('roadmap')}>
                로드맵
              </Styled.TabName>
              <Styled.TabName
                isActive={active === 'comment'}
                onClick={() => {
                  setActive('comment');
                  setReferenceOpen(false);
                }}>
                코멘트
              </Styled.TabName>
            </Styled.Header>

            {/* iframe 과 임베드는 렌더링 시간이 소요되므로 미리 렌더링 해놓는다. */}
            <Styled.ReferenceContainer
              initial="hidden"
              animate={referenceOpen ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, zIndex: 1 },
                hidden: { opacity: 0, zIndex: -1 },
              }}
              transition={{ type: 'tween' }}>
              <Reference
                stepTitle={stepTitle}
                handleCloseReferenceAside={() => {
                  setReferenceOpen(false);
                }}
              />
            </Styled.ReferenceContainer>

            {(() => {
              switch (active) {
                case 'roadmap':
                  return (
                    <>
                      <RoadMapInfo
                        handleCloseAside={() => {
                          setOpen(false);
                          setReferenceOpen(false);
                        }}
                      />
                      <Styled.StepList>
                        {steps?.result.steps.map((step) => {
                          return (
                            <Step
                              key={step.id}
                              stepId={step.id}
                              title={step.title}
                              isSubmit={step.isSubmit}
                              tilId={step.tilId}
                              handleOpenReferenceAside={() => {
                                setReferenceOpen(true);
                              }}
                              handleMobileSideBar={handleMobileSideBar}
                              autoSavedTimeHandler={autoSavedTimeHandler}
                              handleStepTitle={handleStepTitle}
                            />
                          );
                        })}
                      </Styled.StepList>
                    </>
                  );

                case 'comment':
                  return <Comment handleCloseCommentAside={() => setOpen(false)} />;
              }
            })()}
          </Styled.Content>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default SideBar;
