import Image from 'next/image';
import Button from '@/components/common/Button';
import * as Styled from './style';

interface FallBackProps {
  onClick: () => void;
}

const Fallback = (props: FallBackProps) => {
  const { onClick } = props;

  return (
    <Styled.Root>
      <Image src="/assets/icons/ic_triangleAlert.svg" width={100} height={100} alt="로딩 중입니다." />
      <Styled.Description>오류가 발생했습니다</Styled.Description>
      <Button css={Styled.ButtonStyles} onClick={onClick}>
        다시 시도
      </Button>
    </Styled.Root>
  );
};

export default Fallback;
