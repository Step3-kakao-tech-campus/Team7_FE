import { useRef } from 'react';
import { useGetAlarms, useGetUsers, usePatchAlarm } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import AlarmModal from '@/components/gnb/UserGNB/desktop/AlarmModal';
import MobileAlarmModal from '@/components/gnb/UserGNB/mobile/MobileAlarmModal';
import * as Styled from '@/components/gnb/common/GNBProfile/style';
import { useModalState } from '@/hooks/useModalState';

const GNBProfile = () => {
  const { user, isLoading } = useGetUsers();
  const { isNewAlarm, patchAlarmRequset } = useGetAlarms();
  const { patchAlarmAsync } = usePatchAlarm();

  const { isOpen: isAlarmOpen, handleClose: handleCloseAlarm, handleToggle: handleToggleAlarm } = useModalState(false);

  const alarmButtonRef = useRef<HTMLButtonElement>(null);

  const handleAlarm = () => {
    handleToggleAlarm();
    patchAlarmAsync({ body: patchAlarmRequset });
  };

  return (
    <Styled.NoticeContainer>
      <CustomSuspense isLoading={isLoading} fallback={<Skeleton css={Styled.ProfileSkeletonStyles} type="circle" />}>
        <button ref={alarmButtonRef} onClick={handleAlarm}>
          {user?.image ? (
            <Avatar imageUrl={user?.image} imageSize={40} alt="프로필 이미지" />
          ) : (
            <Avatar imageSize={40} iconName="ic_profile" alt="프로필 이미지" />
          )}
        </button>
      </CustomSuspense>

      {isNewAlarm && <Styled.AlarmActiveDot />}

      <Responsive device="desktop">
        <AlarmModal alarmButtonRef={alarmButtonRef} isOpen={isAlarmOpen} onClose={handleCloseAlarm} />
      </Responsive>
      <Responsive device="mobile">
        <MobileAlarmModal alarmButtonRef={alarmButtonRef} isOpen={isAlarmOpen} onClose={handleCloseAlarm} />
      </Responsive>
    </Styled.NoticeContainer>
  );
};

export default GNBProfile;
