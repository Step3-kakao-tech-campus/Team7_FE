import { useRouter } from 'next/router';
import * as Styled from '@/components/auth/register/RegisterCompeleteModal/style';
import Modal, { type ModalProps } from '@/components/common/Modal';
import { tilyLinks } from '@/constants/links';

const RegisterCompeleteModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const router = useRouter();

  return (
    <Modal
      width={25}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        router.replace(tilyLinks.login());
      }}>
      <Styled.Title>회원가입이 완료되었습니다.</Styled.Title>
      <Styled.LoginButton href={tilyLinks.login()} replace={true}>
        로그인 페이지로 이동
      </Styled.LoginButton>
    </Modal>
  );
};

export default RegisterCompeleteModal;
