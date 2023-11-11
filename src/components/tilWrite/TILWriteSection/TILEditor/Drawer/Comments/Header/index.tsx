import Icon from '@/components/common/Icon';
import * as Styled from './style';

interface HeaderProps {
  handleCloseCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleCloseCommentAside } = props;

  return (
    <Styled.Root>
      <Styled.Comment>코멘트</Styled.Comment>
      <Icon iconName="ic_close" imageSize={16} ext="svg" onClick={handleCloseCommentAside} alt="닫기 버튼" />
    </Styled.Root>
  );
};

export default Header;
