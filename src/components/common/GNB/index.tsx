import { useRef } from 'react';
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
import TILY_LINKS from '@/constants/links';
import useAuth from '@/hooks/useAuth';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const GNB = () => {
  useGetRoadmapsMy();
  const { user, isLoading } = useGetUser();
  const { isNewAlarm, patchAlarmRequset } = useGetAlarms();
  const { patchAlarm } = usePatchAlarm();
  const { isOpen: isTilModalOpen, handleOpen: handleOpenTilModal, handleClose: handleCloseTilModal } = useModalState();
  const { isOpen: isAlarmOpen, handleClose: handleCloseAlarm, handleToggle: handleToggleAlarm } = useModalState(false);
  const alarmButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const activePathMatcher = (path: string) => `/${router.pathname.split('/')[1]}` === path;

  const handleAlarm = () => {
    handleToggleAlarm();
    patchAlarm(patchAlarmRequset);
  };

  return (
    <>
      <Styled.Root>
        <Styled.Inner>
          <button onClick={() => router.push(TILY_LINKS.home())}>
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
            <Styled.NavItem href={TILY_LINKS.home()} active={+activePathMatcher(TILY_LINKS.home())}>
              홈
            </Styled.NavItem>
            <Styled.NavItem href={TILY_LINKS.roadmap()} active={+activePathMatcher(TILY_LINKS.roadmap())}>
              로드맵
            </Styled.NavItem>
          </Styled.NavArea>

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
                <Alarm alarmButtonRef={alarmButtonRef} isAlarmOpen={isAlarmOpen} handleCloseAlarm={handleCloseAlarm} />
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
