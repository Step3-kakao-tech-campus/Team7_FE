import { useRouter } from 'next/router';
import * as Styled from '@/components/GNB/common/GNBNav/style';
import TILY_LINKS from '@/constants/links';

const GNBNav = () => {
  const router = useRouter();
  const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  return (
    <Styled.NavArea>
      <Styled.NavItem href={TILY_LINKS.home()} active={+activePathMatcher(TILY_LINKS.home())}>
        홈
      </Styled.NavItem>
      <Styled.NavItem href={TILY_LINKS.roadmap()} active={+activePathMatcher(TILY_LINKS.roadmap())}>
        로드맵
      </Styled.NavItem>
    </Styled.NavArea>
  );
};

export default GNBNav;
