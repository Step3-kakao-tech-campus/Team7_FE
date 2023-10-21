import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface ConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAcceptUser: () => void;
  handleRejectUser: () => void;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { isOpen, handleClose, handleAcceptUser, handleRejectUser } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>신청서</Styled.Title>
      <Styled.UserInfo>
        <Avatar imageUrl="https://avatars.githubusercontent.com/u/48426991?v=4" alt="프로필 이미지" imageSize={36} />
        <span>김민재님</span>
      </Styled.UserInfo>

      <Styled.InfoContainer>
        <h3>자기 소개</h3>
        <Styled.Info>
          {
            '저는 부산대학교 컴퓨터공학과 4학년 재학중입니다. \n 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.'
          }
        </Styled.Info>
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
