import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import Icon from '@/components/common/Icon';
import * as Styled from '@/components/roadmap/manage/common/MobileManageBar/style';
import TILY_LINKS from '@/constants/links';

const MobileManageBar = () => {
  const router = useRouter();
  const roadmapId = Number(router.query.roadmapId);
  const { data } = useGetRoadmapsById({ roadmapId });

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Icon iconName="ic_hamburger" imageSize={24} alt="사이드바" ext="svg" />
      </Dialog.Trigger>
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
            <Styled.Header>{data?.result.name}</Styled.Header>

            <Styled.RoadmapContainer>
              <Styled.Item
                onClick={() => {
                  router.push(TILY_LINKS.manageInfo(roadmapId));
                  setOpen(false);
                }}>
                로드맵 정보
              </Styled.Item>
              <Styled.Item
                onClick={() => {
                  router.push(TILY_LINKS.manageStep(roadmapId));
                  setOpen(false);
                }}>
                STEP 관리
              </Styled.Item>
              <Styled.Item
                onClick={() => {
                  router.push(TILY_LINKS.manageMember(roadmapId));
                  setOpen(false);
                }}>
                구성원 관리
              </Styled.Item>
              <Styled.Item
                onClick={() => {
                  router.push(TILY_LINKS.manageTIL(roadmapId));
                  setOpen(false);
                }}>
                TIL 모아보기
              </Styled.Item>
              <Styled.Item
                onClick={() => {
                  router.push(TILY_LINKS.manageApply(roadmapId));
                  setOpen(false);
                }}>
                신청 관리
              </Styled.Item>
            </Styled.RoadmapContainer>
          </Styled.Content>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default MobileManageBar;
