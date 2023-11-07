/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface ExtensionInfoModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ExtensionInfoModal = (props: ExtensionInfoModalProps) => {
  const { isOpen, handleClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>깃허브 업로드 기능</Styled.Title>
      <Styled.Info>
        <Styled.InfoText>학습일지를 깃허브에 업로드 할 수 있습니다.</Styled.InfoText>
        <Styled.InfoText>안내 페이지로 이동하시겠습니까?</Styled.InfoText>
      </Styled.Info>
      <Styled.ButtonContainer>
        <Button variant="ghost" onClick={handleClose}>
          취소
        </Button>

        <Link href="https://zinc-lyre-886.notion.site/c841d91617134426a4ec38535574acfd?pvs=4" target="_blank">
          <Button onClick={handleClose}>확인</Button>
        </Link>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default ExtensionInfoModal;
