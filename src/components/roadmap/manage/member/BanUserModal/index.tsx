import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface BanUserModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleBanUser: () => void;
}

const BanUserModal = (props: BanUserModalProps) => {
  const { isOpen, handleClose, handleBanUser } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>구성원 강퇴하기</Styled.Title>
      <Styled.Info>
        <Styled.InfoText>해당 멤버는 로드맵에서 제외됩니다</Styled.InfoText>
        <Styled.InfoText>그래도 강퇴하시겠습니까?</Styled.InfoText>
      </Styled.Info>
      <Styled.ButtonContainer>
        <Button variant="ghost" onClick={handleClose}>
          취소
        </Button>
        <Button onClick={handleBanUser}>확인</Button>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default BanUserModal;
