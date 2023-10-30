import { useState } from 'react';
import Personal from '@/components/common/GNB/desktop/Personal';
import RoadMap from '@/components/common/GNB/desktop/RoadMap';
import Modal from '@/components/common/Modal';
import Tab from '@/components/common/Tab';
import * as Styled from './style';

interface TILModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TILModal = (props: TILModalProps) => {
  const { isOpen, onClose } = props;

  const [curTab, setCurTab] = useState<'personal' | 'roadmap'>('personal');

  if (!isOpen) return null;

  return (
    <Modal
      css={Styled.ModalContainerStyles}
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
