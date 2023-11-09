import Image from 'next/image';
import { useRouter } from 'next/router';
import AuthLogo from '@/components/auth/common/AuthLogo';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Modal, { type ModalProps } from '@/components/common/Modal';
import TILY_LINKS from '@/constants/links';

const AuthRequireModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Flex dir="col" align="center" gap={1.5}>
        <AuthLogo />
        <h3>로그인 후 다양한 로드맵들을 만나보세요!</h3>
        <Image src="/assets/icons/ic_welcome.svg" width={200} height={200} alt="환영 이미지" />
        <Button onClick={() => router.push(TILY_LINKS.login())} fullWidth>
          시작하기
        </Button>
      </Flex>
    </Modal>
  );
};

export default AuthRequireModal;
