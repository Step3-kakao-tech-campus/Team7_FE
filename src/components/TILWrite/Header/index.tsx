import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

interface HeaderProps {
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleOpenCommentAside } = props;

  const router = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: router.query.roadmapId as string,
    stepId: router.query.stepId as string,
    tilId: router.query.tilId as string,
  });

  return (
    <Styled.Root>
      <button onClick={() => router.push(tilyLinks.home())}>
        <Logo type="logo" imageSize={32} />
      </button>
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.Container>
        <Icon iconName="ic_github" imageSize={32} ext="svg" alt="깃허브 익스텐션" />
        {tilDetail?.isPersonal === false && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_comment" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default Header;
