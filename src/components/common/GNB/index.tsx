import { useRouter } from 'next/router';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import { useGetAlarms, useGetUser } from '@/api/hooks/user';
import { usePatchAlarm } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Alarm from '@/components/common/GNB/Alarm';
import TILModal from '@/components/common/GNB/TILModal';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const GNB = () => {
  useGetRoadmaps();
  const { user } = useGetUser();
  const { isNewAlarm, patchAlarmRequset } = useGetAlarms();
  const { patchAlarm } = usePatchAlarm();
  const { isOpen: isTilModalOpen, handleOpen: handleOpenTilModal, handleClose: handleCloseTilModal } = useModalState();
  const { isOpen: isAlarmOpen, handleOpen: handleOpenAlarm, handleClose: handleCloseAlarm } = useModalState();

  const router = useRouter();

  const activePathMatcher = (path: string) => router.pathname === path;

  const handleAlarm = () => {
    handleOpenAlarm();
    patchAlarm(patchAlarmRequset);
  };

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

            <Button onClick={handleOpenTilModal} css={Styled.TILButtonStyles} variant="ghost">
              TIL
            </Button>

            <Styled.NoticeContainer>
              <button onClick={handleAlarm}>
                {user?.image ? (
                  <Avatar imageUrl={user?.image} imageSize={40} alt="프로필 이미지" />
                ) : (
                  <Avatar imageSize={40} iconName="ic_profile" alt="프로필 이미지" />
                )}
              </button>

              {isNewAlarm && <Styled.AlarmActiveDot />}

              {isAlarmOpen && <Alarm handleCloseAlarm={handleCloseAlarm} />}
            </Styled.NoticeContainer>
          </Styled.ActionArea>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />

      <TILModal isOpen={isTilModalOpen} onClose={handleCloseTilModal} />
    </>
  );
};

export default GNB;
