import { useRouter } from 'next/router';
import * as Styled from '@/components/GNB/GuestGNB/style';
import useGuestGNB from '@/components/GNB/GuestGNB/useGuestGNB';
import GNBLogo from '@/components/GNB/common/GNBLogo';
import GNBNav from '@/components/GNB/common/GNBNav';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Responsive from '@/components/common/Responsive';
import TILY_LINKS from '@/constants/links';

const GuestGNB = () => {
  const router = useRouter();
  const { isScrolled } = useGuestGNB();

  // const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  return (
    <>
      <Styled.Root isScrolled={isScrolled}>
        <Styled.Inner>
          <GNBLogo />
          {/* <GNBNav/> */}

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
