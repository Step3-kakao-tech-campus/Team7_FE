import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import * as Styled from '@/components/tilWrite/TILWriteSection/Header/style';
import TILY_LINKS from '@/constants/links';

interface HeaderProps {
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleOpenCommentAside } = props;

  const router = useRouter();

  const { tilDetail } = useGetTil({
    tilId: Number(router.query.tilId),
  });

  return (
    <Styled.Root>
      <button onClick={() => router.push(TILY_LINKS.home())}>
        <Logo type="logo" imageSize={32} />
      </button>
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.IconContainer>
        {!tilDetail?.isPersonal && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_commentBlack" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.IconContainer>
    </Styled.Root>
  );
};

export default Header;
