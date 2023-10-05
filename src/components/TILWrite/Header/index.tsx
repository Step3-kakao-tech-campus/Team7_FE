import Image from 'next/image';
import Logo from '@/components/common/Logo';
import * as Styled from './style';

const Header = () => {
  return (
    <Styled.Root>
      <Logo type="logo" imageSize={32} />
      <Styled.Title>Java - 설치와 실행 2 : 리눅스에 Java 설치하기</Styled.Title>

      <Styled.Container>
        <Image src={'/assets/icons/ic_github.svg'} alt="Logo" width={32} height={32} />
        <Image src={'/assets/icons/ic_comment.svg'} alt="Logo" width={32} height={32} />
      </Styled.Container>
    </Styled.Root>
  );
};

export default Header;
