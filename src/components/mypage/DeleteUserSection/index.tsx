import Button from '@/components/common/Button';
import DeleteUserModal from '@/components/mypage/DeleteUserModal';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const DeleteUserSection = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <Styled.Root>
      <Styled.Title>회원탈퇴</Styled.Title>
      <Button
        variant="primary"
        css={Styled.ButtonStyles}
        onClick={(e) => {
          e.preventDefault();
          handleOpen();
        }}>
        회원 탈퇴
      </Button>

      <DeleteUserModal isOpen={isOpen} handleClose={handleClose} />
    </Styled.Root>
  );
};

export default DeleteUserSection;
