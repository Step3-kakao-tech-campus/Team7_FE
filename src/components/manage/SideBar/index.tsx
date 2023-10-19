import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@/components/common/Card';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const SideBar = () => {
  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname === path;

  return (
    <Styled.Root>
      <Styled.NavItem href={tilyLinks.manageGroupInfo()} active={+activePathMatcher(tilyLinks.manageGroupInfo())}>
        그룹 정보
      </Styled.NavItem>
      <Styled.NavItem href={tilyLinks.manageMember()} active={+activePathMatcher(tilyLinks.manageMember())}>
        구성원 관리
      </Styled.NavItem>
      <Styled.NavItem href={tilyLinks.manageTIL()} active={+activePathMatcher(tilyLinks.manageTIL())}>
        TIL 모아보기
      </Styled.NavItem>
      <Styled.NavItem href={tilyLinks.manageApply()} active={+activePathMatcher(tilyLinks.manageApply())}>
        신청 관리
      </Styled.NavItem>
    </Styled.Root>
  );
};

export default SideBar;
