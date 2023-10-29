import { type PropsWithChildren, useState } from 'react';
import { set } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import type { Category, Tily } from '@/api/type';
import Icon from '@/components/common/Icon';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const SideBar = (props: PropsWithChildren) => {
  const { children } = props;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<'personal' | 'group' | null>(null);

  const router = useRouter();
  const { data } = useGetRoadmaps();

  const { addParamsToUrl } = useParamsToUrl();

  const handleSelectCategory = (id: number) => {
    const roadmapId = id.toString();
    addParamsToUrl({ roadmapId });
    setOpen(false);
  };

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
                      return Steps['personal'](data, handleSelectCategory);
                    case 'group':
                      return Steps['group'](data, handleSelectCategory);
                  }
                })()}
              </Styled.StepContainer>
            </Styled.Body>
          </Styled.Content>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};

export default SideBar;

interface Data {
  category: Category[];
  roadmaps: Tily[];
}

const Steps = {
  personal: (data: Data, handleSelectCategory: (id: number) => void) =>
    data.category.map((item, index) => {
      return (
        <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
          {item.name}
        </Styled.Item>
      );
    }),
  group: (data: Data, handleSelectCategory: (id: number) => void) =>
    data.roadmaps.map((item, index) => {
      return (
        <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
          {item.name}
        </Styled.Item>
      );
    }),
};
