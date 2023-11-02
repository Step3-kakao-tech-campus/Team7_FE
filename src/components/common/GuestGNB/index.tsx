import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import * as Styled from '@/components/common/GuestGNB/style';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import TILY_LINKS from '@/constants/links';
import useGuestGNB from './useGuestGNB';
import Flex from '../Flex';

const GuestGNB = () => {
  const router = useRouter();
  const { isScrolled } = useGuestGNB();

  // const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  return (
    <>
      <Styled.Root isScrolled={isScrolled}>
        <Styled.Inner>
          <button onClick={() => router.push(TILY_LINKS.home())}>
            <Responsive device="mobile">
              <Logo imageSize={24} />
            </Responsive>

            <Responsive device="desktop">
              <Logo imageSize={32} />
            </Responsive>
          </button>

          <Styled.NavArea>
            {/* <Styled.NavItem href={TILY_LINKS.home()} active={+activePathMatcher(TILY_LINKS.home())}>
              홈
            </Styled.NavItem>
            <Styled.NavItem href={TILY_LINKS.roadmap()} active={+activePathMatcher(TILY_LINKS.roadmap())}>
              로드맵
            </Styled.NavItem> */}
          </Styled.NavArea>

          <Responsive device="mobile">
            <Flex>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.login())}>
                로그인
              </Button>
            </Flex>
          </Responsive>
          <Responsive device="desktop">
            <Flex>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.login())}>
                로그인
              </Button>
              <Button css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.verify())}>
                회원가입
              </Button>
            </Flex>
          </Responsive>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />
    </>
  );
};

export default GuestGNB;
