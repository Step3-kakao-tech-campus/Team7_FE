import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Responsive from '@/components/common/Responsive';
import * as Styled from '@/components/gnb/GuestGNB/style';
import useGuestGNB from '@/components/gnb/GuestGNB/useGuestGNB';
import GNBLogo from '@/components/gnb/common/GNBLogo';
import GNBNav from '@/components/gnb/common/GNBNav';
import TILY_LINKS from '@/constants/links';

const GuestGNB = () => {
  const router = useRouter();
  const { isScrolled } = useGuestGNB();

  return (
    <>
      <Styled.Root isScrolled={isScrolled}>
        <Styled.Inner>
          <GNBLogo />
          <GNBNav />

          <Responsive device="mobile">
            <Flex>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.login())}>
                로그인
              </Button>
            </Flex>
          </Responsive>
          <Responsive device="desktop">
            <Flex>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.verify())}>
                회원가입
              </Button>
              <Button css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.login())}>
                로그인
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
