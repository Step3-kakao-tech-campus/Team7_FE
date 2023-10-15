import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { useModalState } from '@/hooks/useModalState';

export default {
  component: Modal,
} as Meta<typeof Modal>;

export const Default = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <button onClick={handleOpen}>클릭하여 모달 열기</button>
      <Modal title="모달 예시" isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const WithState = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const handleSubmit = () => {
    /* 대충 서버에 제출하는 로직 */

    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen}>클릭하여 모달 열기</button>
      <Modal title="모달 예시" isOpen={isOpen} onClose={handleClose}>
        <Title>TIL 제출하기</Title>
        <Info>
          <InfoText>그룹 로드맵 제출은 한번만 가능합니다</InfoText>
          <InfoText>그래도 제출하시겠습니까?</InfoText>
        </Info>
        <ButtonContainer>
          <Button variant="ghost" onClick={handleClose}>
            취소
          </Button>
          <Button onClick={handleSubmit}>확인</Button>
        </ButtonContainer>
      </Modal>
    </>
  );
};

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
`;

const Info = styled.p`
  margin-top: 0.8rem;
  padding: 0.6em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_gray_200};
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  list-style-type: disc;
  list-style-position: inside;
`;

const InfoText = styled.li`
  margin: 0.5rem 0.4rem;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.3rem;
`;
