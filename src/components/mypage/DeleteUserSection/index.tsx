import { useRouter } from 'next/router';
import { useDeleteUser } from '@/api/hooks/user';
import Button from '@/components/common/Button';
import DeleteUserModal from '@/components/mypage/DeleteUserModal';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const DeleteUserSection = () => {
  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { deleteUserAsync } = useDeleteUser();

  const handleDelteUser = async (password: string) => {
    const { data } = await deleteUserAsync({ body: { password } });
    if (data.code === 200) {
      handleClose();
      router.push(TILY_LINKS.intro());
    }
  };

  return (
    <Styled.Root>
      <Styled.Title>회원탈퇴</Styled.Title>
      <Button
        variant="primary"
        css={Styled.ButtonStyles}
        onClick={(e) => {
          e.preventDefault();
          handleOpen();
          router.replace(TILY_LINKS.intro());
        }}>
        회원 탈퇴
      </Button>

      <DeleteUserModal isOpen={isOpen} handleClose={handleClose} handleDelteUser={handleDelteUser} />
    </Styled.Root>
  );
};

export default DeleteUserSection;
