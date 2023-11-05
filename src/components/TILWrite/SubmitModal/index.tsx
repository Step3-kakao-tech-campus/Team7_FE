import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface SubmitModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmitTIL: () => void;
}

const SubmitModal = (props: SubmitModalProps) => {
  const { isOpen, handleClose, handleSubmitTIL } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>TIL 제출하기</Styled.Title>
      <Styled.Info>
        <Styled.InfoText>그룹 로드맵 제출은 한번만 가능합니다</Styled.InfoText>
        <Styled.InfoText>그래도 제출하시겠습니까?</Styled.InfoText>
      </Styled.Info>
      <Styled.ButtonContainer>
        <Button variant="ghost" onClick={handleClose}>
          취소
        </Button>
        <Button onClick={handleSubmitTIL}>확인</Button>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default SubmitModal;
