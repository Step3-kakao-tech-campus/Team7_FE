import Image from 'next/image';
import * as Styled from './style';

interface HeaderProps {
  stepTitle: string;
  handleCloseReferenceAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { stepTitle, handleCloseReferenceAside } = props;

  return (
    <Styled.Container>
      <Styled.TitleContainer onClick={handleCloseReferenceAside}>
        <Image src="/assets/icons/ic_arrowLeft.svg" alt="왼쪽 화살표" width={20} height={20} />
        <div>로드맵</div>
      </Styled.TitleContainer>

      <Styled.Title>{stepTitle}</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
