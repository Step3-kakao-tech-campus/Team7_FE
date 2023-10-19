import Image from 'next/image';
import * as Styled from '@/components/TILWrite/Reference/Header/style';

interface HeaderProps {
  handleCloseReferenceAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleCloseReferenceAside } = props;

  return (
    <Styled.Container>
      <Styled.TitleContainer onClick={handleCloseReferenceAside}>
        <Image src="/assets/icons/ic_arrowLeft.svg" alt="왼쪽 화살표" width={20} height={20} />
        <div>로드맵</div>
      </Styled.TitleContainer>

      <Styled.Title>Java - 설치와 실행 2 : 리눅스에 Java 설치하기</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
