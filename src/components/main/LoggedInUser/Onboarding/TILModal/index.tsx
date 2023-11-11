import { forwardRef } from 'react';
import { memo } from 'react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Modal, { type ModalProps } from '@/components/common/Modal';
import Tab from '@/components/common/Tab';
import * as PersonalModalStyled from '@/components/gnb/UserGNB/desktop/Personal/style';
import PlusButton from '@/components/gnb/UserGNB/desktop/PlusButton';
import * as Styled from '@/components/gnb/UserGNB/desktop/TILModal/style';

interface OnboardingModalProps extends ModalProps {
  isCategoryNextStep: boolean;
}

const TILModal = forwardRef<HTMLDivElement, OnboardingModalProps>((props, ref) => {
  const { isOpen, onClose, isBackDrop = true, isCategoryNextStep } = props;

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
          <Tab.Menu css={Styled.TabMenuStyles} className={'selected'}>
            개인 TIL
          </Tab.Menu>
          <Tab.Menu css={Styled.TabMenuStyles}>로드맵 TIL</Tab.Menu>
        </Tab>
      </Styled.TabOnboardRefContainer>

      <PersonalModalStyled.ModalInfo>
        <div>카테고리</div>
        <div>TIL</div>
      </PersonalModalStyled.ModalInfo>

      <Card css={PersonalModalStyled.CardStyles}>
        <PersonalModalStyled.RoadmapSection>
          <PlusButton testid="plusButton1" title="카테고리 추가하기" />
          {isCategoryNextStep && (
            <PersonalModalStyled.List>
              <PersonalModalStyled.Item data-testid="RoadmapSectionItem" selected={true}>
                알고리즘
              </PersonalModalStyled.Item>
            </PersonalModalStyled.List>
          )}
        </PersonalModalStyled.RoadmapSection>

        {isCategoryNextStep && (
          <PersonalModalStyled.StepSection>
            <PlusButton testid="plusButton2" title="TIL 추가하기" />
            <PersonalModalStyled.List>
              <PersonalModalStyled.Item>다익스트라</PersonalModalStyled.Item>
            </PersonalModalStyled.List>
          </PersonalModalStyled.StepSection>
        )}
      </Card>

      <PersonalModalStyled.ButtonContainer>
        <Button css={PersonalModalStyled.ButtonStyles}>완료</Button>
      </PersonalModalStyled.ButtonContainer>
    </Modal>
  );
});

export default memo(TILModal);
