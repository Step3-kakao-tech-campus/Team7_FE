import { forwardRef, useState } from 'react';
import Modal, { type ModalProps } from '@/components/common/Modal';
import Tab from '@/components/common/Tab';
import Personal from '@/components/gnb/UserGNB/desktop/Personal';
import RoadMap from '@/components/gnb/UserGNB/desktop/RoadMap';
import * as Styled from '@/components/gnb/UserGNB/desktop/TILModal/style';

const TILModal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { isOpen, onClose, isBackDrop = true } = props;

  const [curTab, setCurTab] = useState<'personal' | 'roadmap'>('personal');

  if (!isOpen) return null;

  return (
    <Modal
      css={Styled.DesktopModalContainerStyles}
      closeButtonStyles={Styled.CloseButtonStyles}
      closeButtonSize={28}
      modalContentStyles={Styled.ModalContentStyles}
      isOpen={isOpen}
      onClose={onClose}
      isBackDrop={isBackDrop}>
      <Styled.ModalTitle data-testid="TILSelect">TIL 선택</Styled.ModalTitle>

      <Styled.TabOnboardRefContainer ref={ref}>
        <Tab css={Styled.TabStyles}>
          {tabMenu.map((menu) => {
            return (
              <Tab.Menu
                key={menu.name}
                onClick={() => setCurTab(menu.status)}
                className={curTab === menu.status ? 'selected' : ''}
                tooltipContent={
                  menu.name === '개인 TIL'
                    ? () => (
                        <>
                          <p>혼자 공부할 수 있는 공간이에요.</p>
                          <p>카테고리별로 TIL을 작성해보세요.</p>
                        </>
                      )
                    : () => (
                        <>
                          <p>참여중인 로드맵들을 확인하고.</p>
                          <p>각 STEP을 공부해보세요.</p>
                        </>
                      )
                }>
                {menu.name}
              </Tab.Menu>
            );
          })}
        </Tab>
      </Styled.TabOnboardRefContainer>

      {tabContent[curTab]}
    </Modal>
  );
});

export default TILModal;

const tabMenu = [
  { name: '개인 TIL', status: 'personal' },
  { name: '로드맵 TIL', status: 'roadmap' },
] as const;

const tabContent = {
  personal: <Personal />,
  roadmap: <RoadMap />,
} as const;
