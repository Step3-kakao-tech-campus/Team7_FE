import { useState } from 'react';
import Personal from '@/components/GNB/UserGNB/desktop/Personal';
import RoadMap from '@/components/GNB/UserGNB/desktop/RoadMap';
import * as Styled from '@/components/GNB/UserGNB/desktop/TILModal/style';
import Modal, { type ModalProps } from '@/components/common/Modal';
import Tab from '@/components/common/Tab';

const TILModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  const [curTab, setCurTab] = useState<'personal' | 'roadmap'>('personal');

  if (!isOpen) return null;

  return (
    <Modal
      css={Styled.DesktopModalContainerStyles}
      closeButtonStyles={Styled.CloseButtonStyles}
      closeButtonSize={28}
      modalContentStyles={Styled.ModalContentStyles}
      isOpen={isOpen}
      onClose={onClose}>
      <Styled.ModalTitle>학습 선택</Styled.ModalTitle>

      <Tab css={Styled.TabStyles}>
        {tabMenu.map((menu) => {
          return (
            <Tab.Menu
              key={menu.name}
              css={Styled.TabMenuStyles}
              onClick={() => setCurTab(menu.status)}
              className={curTab === menu.status ? 'selected' : ''}>
              {menu.name}
            </Tab.Menu>
          );
        })}
      </Tab>

      {tabContent[curTab]}
    </Modal>
  );
};

export default TILModal;

const tabMenu = [
  { name: '개인 TIL', status: 'personal' },
  { name: '로드맵 TIL', status: 'roadmap' },
] as const;

const tabContent = {
  personal: <Personal />,
  roadmap: <RoadMap />,
} as const;
