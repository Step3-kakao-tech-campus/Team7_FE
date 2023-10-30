import { useRouter } from 'next/router';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const SideBar = () => {
  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname.split('/')[4] === path.split('/')[4];

  return (
    <Styled.Root>
      <Styled.NavItem
        href={tilyLinks.manageGroupInfo(Number(router.query.roadmapId))}
        active={+activePathMatcher(tilyLinks.manageGroupInfo(Number(router.query.roadmapId)))}>
        그룹 정보
      </Styled.NavItem>
      <Styled.NavItem
        href={tilyLinks.manageMember(Number(router.query.roadmapId))}
        active={+activePathMatcher(tilyLinks.manageMember(Number(router.query.roadmapId)))}>
        구성원 관리
      </Styled.NavItem>
      <Styled.NavItem
        href={tilyLinks.manageTIL(Number(router.query.roadmapId))}
        active={+activePathMatcher(tilyLinks.manageTIL(Number(router.query.roadmapId)))}>
        TIL 모아보기
      </Styled.NavItem>
      <Styled.NavItem
        href={tilyLinks.manageApply(Number(router.query.roadmapId))}
        active={+activePathMatcher(tilyLinks.manageApply(Number(router.query.roadmapId)))}>
        신청 관리
      </Styled.NavItem>
    </Styled.Root>
  );
};

export default SideBar;
