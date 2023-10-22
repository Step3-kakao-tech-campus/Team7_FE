import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface DeleteUserModalprops {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmitTIL?: () => void;
}

const DeleteUserModal = (props: DeleteUserModalprops) => {
  const { isOpen, handleClose, handleSubmitTIL } = props;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>회원 탈퇴</Styled.Title>
      <Styled.InputContainer>
        <Input label="현재 계정의 비밀번호를 입력해주세요." type="text" />
      </Styled.InputContainer>

      <Styled.ButtonContainer>
        <Button variant="ghost" onClick={handleClose}>
          취소
        </Button>
        <Button onClick={handleSubmitTIL} variant="primary">
          확인
        </Button>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default DeleteUserModal;
