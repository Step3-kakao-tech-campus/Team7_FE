import * as Styled from '@/components/auth/register/verify/VerifyModal/style';
import Modal from '@/components/common/Modal';

interface VerifyModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const VerifyModal = (props: VerifyModalProps) => {
  const { isOpen, handleClose } = props;
  return (
    <Modal width={20} isOpen={isOpen} onClose={handleClose}>
      <Styled.ModalContainer>
        <Styled.Title>이미 사용중인 이메일입니다.</Styled.Title>
        <Styled.Info dir="col">
          <Styled.InfoText>해당 이메일로 로그인하거나</Styled.InfoText>
          <Styled.InfoText>다른 이메일 주소를 입력해 주세요.</Styled.InfoText>
        </Styled.Info>
        <Styled.ButtonContainer dir="col">
          <Styled.LoginButton>로그인</Styled.LoginButton>
          <Styled.TryButton
            onClick={() => {
              handleClose();
            }}
            variant="ghost">
            다시 입력
          </Styled.TryButton>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default VerifyModal;
