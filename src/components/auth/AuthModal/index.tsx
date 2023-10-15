import { useRouter } from 'next/router';
import * as Styled from '@/components/auth/AuthModal/style';
import Modal from '@/components/common/Modal';
import { tilyLinks } from '@/constants/links';

interface AuthModalProps {
  isOpen: boolean;
  handleClose: () => void;
  content: string;
}

const AuthModal = (props: AuthModalProps) => {
  const { isOpen, handleClose, content } = props;
  const router = useRouter();

  return (
    <Modal
      width={25}
      isOpen={isOpen}
      onClose={() => {
        handleClose();
        router.replace(tilyLinks.login());
      }}>
      <Styled.Title>{content}</Styled.Title>
      <Styled.LoginButton href={tilyLinks.login()} replace={true}>
        로그인 페이지로 이동
      </Styled.LoginButton>
    </Modal>
  );
};

export default AuthModal;
