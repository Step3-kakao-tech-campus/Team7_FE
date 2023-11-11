import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Modal, { type ModalProps } from '@/components/common/Modal';
import TILY_LINKS from '@/constants/links';
import AuthLogo from '../AuthLogo';

interface AuthModal extends ModalProps {
  content: string;
}

const AuthModal = (props: ModalProps) => {
  const { isOpen, onClose, content } = props;
  const router = useRouter();

  return (
    <Modal
      showCloseButton={false}
      width={25}
      isOpen={isOpen}
      onClose={() => {
        onClose?.();
        router.replace(TILY_LINKS.login());
      }}>
      <Flex dir="col" align="center" gap={1.5}>
        <AuthLogo />
        <Flex dir="col" align="center" gap={0.3}>
          <h3>{content}</h3>
          <h3>바로 다양한 서비스들을 이용해보세요.</h3>
        </Flex>

        <Button
          onClick={() => {
            router.replace(TILY_LINKS.login());
          }}
          fullWidth>
          시작하기
        </Button>
      </Flex>
    </Modal>
  );
};

export default AuthModal;
