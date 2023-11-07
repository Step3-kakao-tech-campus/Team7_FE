import type { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import Modal, { type ModalProps } from '@/components/common/Modal';
import TILY_LINKS from '@/constants/links';

interface EscapeModalProps extends ModalProps {
  callback: Dispatch<SetStateAction<boolean>>;
}

const EscapeModal = (props: EscapeModalProps) => {
  const { isOpen, onClose, callback } = props;
  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={30}>
      <EscapeModalContainer>
        <h2>아직 로드맵이 저장되지 않았어요!</h2>
        <p>
          <span>나가시면 로드맵 정보들이 사라집니다.</span> 그래도 나가시겠습니까?
        </p>
        <section>
          <Button
            onClick={() => {
              callback(true);
              router.push(TILY_LINKS.roadmap());
            }}>
            나가기
          </Button>
          <Button onClick={onClose}>취소</Button>
        </section>
      </EscapeModalContainer>
    </Modal>
  );
};

export default EscapeModal;

const EscapeModalContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p > span {
    color: ${({ theme }) => theme.colors.rose};
  }
  & > section {
    display: flex;
    align-self: flex-end;
    gap: 10px;
  }

  & > section > button:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.rose};
  }
`;
