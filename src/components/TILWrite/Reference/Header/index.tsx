import Image from 'next/image';
import * as Styled from './style';

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

      <Styled.Title>Next.js 13 - Next.js 란 무엇인가?</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
