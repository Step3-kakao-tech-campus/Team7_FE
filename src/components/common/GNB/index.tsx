import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import { useGetAlarms, useGetUser } from '@/api/hooks/user';
import { usePatchAlarm } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Alarm from '@/components/common/GNB/desktop/Alarm';
import TILModal from '@/components/common/GNB/desktop/TILModal';
import MobileAlarm from '@/components/common/GNB/mobile/MobileAlarm';
import MobileTILModal from '@/components/common/GNB/mobile/MobileTILModal';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import { tilyLinks } from '@/constants/links';
import useAuth from '@/hooks/useAuth';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const GNB = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useGetRoadmapsMy();
  const { isLoggedIn } = useAuth();
  const { user, isLoading } = useGetUser();
  const { isNewAlarm, patchAlarmRequset } = useGetAlarms();
  const { patchAlarm } = usePatchAlarm();
  const { isOpen: isTilModalOpen, handleOpen: handleOpenTilModal, handleClose: handleCloseTilModal } = useModalState();
  const { isOpen: isAlarmOpen, handleClose: handleCloseAlarm, handleToggle: handleToggleAlarm } = useModalState(false);
  const alarmButtonRef = useRef<HTMLButtonElement>(null);
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

  const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  const handleAlarm = () => {
    handleToggleAlarm();
    patchAlarm(patchAlarmRequset);
  };

  return (
    <>
      <Styled.Root isLoggedIn={isLoggedIn} isScrolled={isScrolled}>
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
            <Styled.NavItem href={tilyLinks.home()} active={+activePathMatcher(tilyLinks.home())}>
              홈
            </Styled.NavItem>
            <Styled.NavItem href={tilyLinks.roadmap()} active={+activePathMatcher(tilyLinks.roadmap())}>
              로드맵
            </Styled.NavItem>
          </Styled.NavArea>

          {isLoggedIn && (
            <Styled.ActionArea>
              <Responsive device="desktop">
                <Styled.TILInfo>
                  <span>오늘의 TIL를 작성하고 </span>
                  <span>장미</span>
                  <span>를 심어보세요</span>
                </Styled.TILInfo>
              </Responsive>

              <Button onClick={handleOpenTilModal} css={Styled.TILButtonStyles} variant="ghost">
                TIL
              </Button>

              <Styled.NoticeContainer>
                <CustomSuspense
                  isLoading={isLoading}
                  fallback={<Skeleton css={Styled.ProfileSkeletonStyles} type="circle" />}>
                  <button ref={alarmButtonRef} onClick={() => handleAlarm()}>
                    {user?.image ? (
                      <Avatar imageUrl={user?.image} imageSize={40} alt="프로필 이미지" />
                    ) : (
                      <Avatar imageSize={40} iconName="ic_profile" alt="프로필 이미지" />
                    )}
                  </button>
                </CustomSuspense>

                {isNewAlarm && <Styled.AlarmActiveDot />}

                <Responsive device="desktop">
                  <Alarm
                    alarmButtonRef={alarmButtonRef}
                    isAlarmOpen={isAlarmOpen}
                    handleCloseAlarm={handleCloseAlarm}
                  />
                </Responsive>
                <Responsive device="mobile">
                  <MobileAlarm
                    alarmButtonRef={alarmButtonRef}
                    isAlarmOpen={isAlarmOpen}
                    handleCloseAlarm={handleCloseAlarm}
                  />
                </Responsive>
              </Styled.NoticeContainer>
            </Styled.ActionArea>
          )}

          <Responsive device="mobile">
            {!isLoggedIn && (
              <Styled.ActionArea>
                <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.login())}>
                  로그인
                </Button>
              </Styled.ActionArea>
            )}
          </Responsive>
          <Responsive device="desktop">
            {!isLoggedIn && (
              <Styled.ActionArea>
                <Button variant="ghost" css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.login())}>
                  로그인
                </Button>
                <Button css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.verify())}>
                  회원가입
                </Button>
              </Styled.ActionArea>
            )}
          </Responsive>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />

      <Responsive device="mobile">
        <MobileTILModal isOpen={isTilModalOpen} onClose={handleCloseTilModal} />
      </Responsive>
      <Responsive device="desktop">
        <TILModal isOpen={isTilModalOpen} onClose={handleCloseTilModal} />
      </Responsive>
    </>
  );
};

export default GNB;
