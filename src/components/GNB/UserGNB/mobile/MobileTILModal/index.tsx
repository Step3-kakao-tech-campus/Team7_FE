import { useState } from 'react';
import Modal, { type ModalProps } from '@/components/common/Modal';
import Tab from '@/components/common/Tab';
import * as Styled from '@/components/gnb/UserGNB/desktop/TILModal/style';
import MobilePersonal from '@/components/gnb/UserGNB/mobile/MobilePersonal';
import MobileRoadMap from '@/components/gnb/UserGNB/mobile/MobileRoadMap';

const MobileTILModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  const [curTab, setCurTab] = useState<'personal' | 'roadmap'>('personal');

  if (!isOpen) return null;

  return (
    <Modal
      css={Styled.MobileModalContainerStyles}
      closeButtonStyles={Styled.CloseButtonStyles}
      closeButtonSize={28}
      modalContentStyles={Styled.MobileModalContentStyles}
      isOpen={isOpen}
      onClose={onClose}>
      <Styled.ModalTitle>TIL 선택</Styled.ModalTitle>

      <Tab css={Styled.TabStyles}>
        {tabMenu.map((menu) => {
          return (
            <Tab.Menu
              key={menu.name}
              css={Styled.TabMenuStyles}
              onClick={() => setCurTab(menu.status)}
              className={curTab === menu.status ? 'selected' : ''}
              isTooltip={false}>
              {menu.name}
            </Tab.Menu>
          );
        })}
      </Tab>

      {tabContent[curTab]}
    </Modal>
  );
};

export default MobileTILModal;

const tabMenu = [
  { name: '개인 TIL', status: 'personal' },
  { name: '로드맵 TIL', status: 'roadmap' },
] as const;

const tabContent = {
  personal: <MobilePersonal />,
  roadmap: <MobileRoadMap />,
} as const;
