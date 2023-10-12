import { useRouter } from 'next/router';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import TILModal from '@/components/common/GNB/TILModal';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';
import { useModalState } from '@/hooks/common/useModalState';
import { useGetRoadmaps } from '@/hooks/queries/roadmap';
import * as Styled from './style';

const GNB = () => {
  useGetRoadmaps();

  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname === path;

  return (
    <>
      <Styled.Root>
        <Styled.Inner>
          <Styled.Logo>
            <Logo imageSize={32} />
          </Styled.Logo>

          <Styled.NavArea>
            <Styled.NavItem href={tilyLinks.home()} isActive={activePathMatcher(tilyLinks.home())}>
              홈
            </Styled.NavItem>
            <Styled.NavItem href={tilyLinks.roadmaps()} isActive={activePathMatcher(tilyLinks.roadmaps())}>
              로드맵
            </Styled.NavItem>
          </Styled.NavArea>

          <Styled.ActionArea>
            <Styled.TILInfo>
              <span>오늘의 TIL를 작성하고 </span>
              <span>장미</span>
              <span>를 심어보세요</span>
            </Styled.TILInfo>

            <Button onClick={handleOpen} css={Styled.TILButtonStyles} variant="ghost">
              TIL
            </Button>

            <Avatar imageSize={40} iconName="ic_profile" />
          </Styled.ActionArea>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />

      <TILModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default GNB;
