import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface ConfirmModalProps {
  name: string;
  image: string;
  content: string;
  isOpen: boolean;
  handleClose: () => void;
  handleAcceptUser: () => void;
  handleRejectUser: () => void;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { name, image, content, isOpen, handleClose, handleAcceptUser, handleRejectUser } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>신청서</Styled.Title>
      <Styled.UserInfo>
        <Avatar imageUrl={image} alt="프로필 이미지" imageSize={36} />
        <span>{name}님</span>
      </Styled.UserInfo>

      <Styled.InfoContainer>
        <h3>자기 소개</h3>
        <Styled.Info>{content}</Styled.Info>
      </Styled.InfoContainer>
      <Styled.ButtonContainer>
        <Button variant="default" onClick={handleRejectUser}>
          거절
        </Button>
        <Button variant="primary" onClick={handleAcceptUser}>
          승인
        </Button>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default ConfirmModal;
