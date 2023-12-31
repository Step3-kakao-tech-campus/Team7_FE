import { useRouter } from 'next/router';
import * as Styled from '@/components/roadmap/manage/common/DesktopManageBar/style';
import TILY_LINKS from '@/constants/links';

const SideBar = () => {
  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname.split('/')[4] === path.split('/')[4];

  return (
    <Styled.Root>
      <Styled.NavItem
        href={TILY_LINKS.manageInfo(Number(router.query.roadmapId))}
        active={+activePathMatcher(TILY_LINKS.manageInfo(Number(router.query.roadmapId)))}>
        로드맵 정보
      </Styled.NavItem>
      <Styled.NavItem
        href={TILY_LINKS.manageStep(Number(router.query.roadmapId))}
        active={+activePathMatcher(TILY_LINKS.manageStep(Number(router.query.roadmapId)))}>
        STEP 관리
      </Styled.NavItem>
      <Styled.NavItem
        href={TILY_LINKS.manageMember(Number(router.query.roadmapId))}
        active={+activePathMatcher(TILY_LINKS.manageMember(Number(router.query.roadmapId)))}>
        구성원 관리
      </Styled.NavItem>
      <Styled.NavItem
        href={TILY_LINKS.manageTIL(Number(router.query.roadmapId))}
        active={+activePathMatcher(TILY_LINKS.manageTIL(Number(router.query.roadmapId)))}>
        TIL 모아보기
      </Styled.NavItem>
      <Styled.NavItem
        href={TILY_LINKS.manageApply(Number(router.query.roadmapId))}
        active={+activePathMatcher(TILY_LINKS.manageApply(Number(router.query.roadmapId)))}>
        신청 관리
      </Styled.NavItem>
    </Styled.Root>
  );
};

export default SideBar;
