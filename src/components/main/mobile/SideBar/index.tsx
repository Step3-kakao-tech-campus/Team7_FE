import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import type { IdName, Roadmap } from '@/api/type';
import EmptyList from '@/components/common/EmptyList';
import Icon from '@/components/common/Icon';
import MobileTILModal from '@/components/gnb/UserGNB/mobile/MobileTILModal';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<'personal' | 'group' | null>(null);
  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();
  const { data } = useGetRoadmapsMy();

  const { addParamsToUrl } = useParamsToUrl();

  const handleSelectCategory = (id: number) => {
    const roadmapId = id.toString();
    addParamsToUrl({ roadmapId });
    setOpen(false);
  };

  const handleOpenTilModal = () => {
    setOpen(false);
    handleOpen();
  };

  const handleRoadmapList = () => {
    router.replace(TILY_LINKS.roadmap());
  };

  return (
    <>
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
              <Styled.Header>
                <Styled.TILInfo>
                  <span>오늘의 TIL를 작성하고 </span>
                  <span>장미</span>
                  <span>를 심어보세요</span>
                </Styled.TILInfo>
              </Styled.Header>

              <Styled.Body>
                <Styled.RoadmapContainer>
                  <Styled.Item
                    onClick={() => {
                      router.push('/');
                      setOpen(false);
                    }}>
                    전체 보기
                  </Styled.Item>
                  <Styled.Item active={'personal' === active} onClick={() => setActive('personal')}>
                    개인 TIL
                  </Styled.Item>
                  <Styled.Item active={'group' === active} onClick={() => setActive('group')}>
                    로드맵 TIL
                  </Styled.Item>
                </Styled.RoadmapContainer>
                <Styled.StepContainer>
                  {(() => {
                    switch (active) {
                      case 'personal':
                        return Steps['personal'](data, handleSelectCategory, handleOpenTilModal);
                      case 'group':
                        return Steps['group'](data, handleSelectCategory, handleRoadmapList);
                    }
                  })()}
                </Styled.StepContainer>
              </Styled.Body>
            </Styled.Content>
          </Dialog.Content>
        </Dialog.DialogPortal>
      </Dialog.Root>
      <MobileTILModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default SideBar;

interface Data {
  category: IdName[];
  roadmaps: Roadmap[];
}

const Steps = {
  personal: (data: Data, handleSelectCategory: (id: number) => void, handleOpenTilModal: () => void) => {
    if (data?.category.length === 0)
      return (
        <EmptyList image="ic_step" imageHeight={45} button="카테고리 만들기" onClick={handleOpenTilModal}>
          <p>아직 카테고리가 없어요</p>
          <p>카테고리를 만들어 보세요.</p>
        </EmptyList>
      );
    return data.category.map((item, index) => {
      return (
        <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
          {item.name}
        </Styled.Item>
      );
    });
  },
  group: (data: Data, handleSelectCategory: (id: number) => void, handleRoadmapList: () => void) => {
    console.log(data.category);
    if (data.roadmaps.length === 0) {
      return (
        <EmptyList image="ic_step" imageHeight={45} button="로드맵 목록" onClick={handleRoadmapList}>
          <p>참여중인 로드맵이 없어요.</p>
          <p>로드맵에 참여해보세요.</p>
        </EmptyList>
      );
    }
    return data.roadmaps.map((item, index) => {
      return (
        <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
          {item.name}
        </Styled.Item>
      );
    });
  },
};
