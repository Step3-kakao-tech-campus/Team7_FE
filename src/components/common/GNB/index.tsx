import Image from 'next/image';
import { useRouter } from 'next/router';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const GNB = () => {
  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname === path;

  return (
    <Styled.Root>
      <Styled.Inner>
        <Styled.Logo>
          <Image src="/assets/icons/ic_tily.svg" alt="logo" width={32} height={32} />
          <Styled.LogoText>TIL-y</Styled.LogoText>
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

          <Button css={Styled.TILButtonStyles} variant="ghost">
            TIL
          </Button>

          <Avatar imageWidth={40} imageHeight={40} iconName="ic_profile" />
        </Styled.ActionArea>
      </Styled.Inner>
    </Styled.Root>
  );
};

export default GNB;