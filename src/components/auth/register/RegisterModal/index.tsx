import { useRouter } from 'next/router';
import * as Styled from '@/components/auth/register/RegisterModal/style';
import Modal from '@/components/common/Modal';
import { tilyLinks } from '@/constants/links';

interface RegisterModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const RegisterModal = (props: RegisterModalProps) => {
  const { isOpen, handleClose } = props;
  const router = useRouter();

  return (
    <Modal
      width={20}
      isOpen={isOpen}
      onClose={() => {
        handleClose();
        router.replace(tilyLinks.login());
      }}>
      <Styled.Title>회원가입이 완료되었습니다.</Styled.Title>
      <Styled.LoginButton href={tilyLinks.login()} replace={true}>
        로그인 페이지로 이동
      </Styled.LoginButton>
    </Modal>
  );
};

export default RegisterModal;
