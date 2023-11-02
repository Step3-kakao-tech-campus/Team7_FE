import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const GuestGNB = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  return (
    <>
      <Styled.Root isScrolled={isScrolled}>
        <Styled.Inner>
          <button onClick={() => router.push(tilyLinks.home())}>
            <Responsive device="mobile">
              <Styled.Logo>
                <Logo imageSize={24} />
              </Styled.Logo>
            </Responsive>

            <Responsive device="desktop">
              <Styled.Logo>
                <Logo imageSize={32} />
              </Styled.Logo>
            </Responsive>
          </button>

          <Styled.NavArea>
            {/* <Styled.NavItem href={tilyLinks.home()} active={+activePathMatcher(tilyLinks.home())}>
              홈
            </Styled.NavItem>
            <Styled.NavItem href={tilyLinks.roadmap()} active={+activePathMatcher(tilyLinks.roadmap())}>
              로드맵
            </Styled.NavItem> */}
          </Styled.NavArea>

          <Responsive device="mobile">
            <Styled.ActionArea>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.login())}>
                로그인
              </Button>
            </Styled.ActionArea>
          </Responsive>
          <Responsive device="desktop">
            <Styled.ActionArea>
              <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.login())}>
                로그인
              </Button>
              <Button css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.verify())}>
                회원가입
              </Button>
            </Styled.ActionArea>
          </Responsive>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />
    </>
  );
};

export default GuestGNB;
