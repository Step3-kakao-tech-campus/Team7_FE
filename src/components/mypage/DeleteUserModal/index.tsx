import { useState } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface DeleteUserModalprops {
  isOpen: boolean;
  handleClose: () => void;
  handleDelteUser: (password: string) => void;
}

const DeleteUserModal = (props: DeleteUserModalprops) => {
  const { isOpen, handleClose, handleDelteUser } = props;

  const [password, setPassword] = useState<string>('');

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>회원 탈퇴</Styled.Title>
      <Styled.InputContainer>
        <div>현재 계정의 비밀번호를 입력해주세요.</div>
        <Input css={Styled.InputContainerStyles} type="text" onChange={(e) => setPassword(e.target.value)} />
      </Styled.InputContainer>

      <Styled.ButtonContainer>
        <Button variant="ghost" onClick={handleClose}>
          취소
        </Button>
        <Button onClick={() => handleDelteUser(password)} variant="primary">
          확인
        </Button>
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default DeleteUserModal;
