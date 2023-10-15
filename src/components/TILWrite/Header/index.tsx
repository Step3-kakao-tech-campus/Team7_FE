import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import * as Styled from './style';

interface HeaderProps {
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleOpenCommentAside } = props;

  return (
    <Styled.Root>
      <Logo type="logo" imageSize={32} />
      <Styled.Title>Java - 설치와 실행 2 : 리눅스에 Java 설치하기</Styled.Title>

      <Styled.Container>
        <Icon iconName="ic_github" imageSize={32} ext="svg" alt="깃허브 익스텐션" />
        <Icon onClick={handleOpenCommentAside} iconName="ic_comment" imageSize={32} ext="svg" alt="코멘트" />
      </Styled.Container>
    </Styled.Root>
  );
};

export default Header;
