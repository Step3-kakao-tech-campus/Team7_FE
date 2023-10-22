import Button from '@/components/common/Button';
import * as Styled from './style';

const DeleteUserSection = () => {
  return (
    <Styled.Root>
      <Styled.Title>회원탈퇴</Styled.Title>
      <Button variant="primary" css={Styled.ButtonStyles}>
        회원 탈퇴
      </Button>
    </Styled.Root>
  );
};

export default DeleteUserSection;
