import { useRef } from 'react';
import { useGetAlarms, useGetUser, usePatchAlarm } from '@/api/hooks/user';
import * as Styled from '@/components/GNB/common/GNBProfile/style';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import { useModalState } from '@/hooks/useModalState';
import Alarm from '../../UserGNB/desktop/Alarm';
import MobileAlarm from '../../UserGNB/mobile/MobileAlarm';

const GNBProfile = () => {
  const { user, isLoading } = useGetUser();
  const { isNewAlarm, patchAlarmRequset } = useGetAlarms();
  const { patchAlarm } = usePatchAlarm();

  const { isOpen: isAlarmOpen, handleClose: handleCloseAlarm, handleToggle: handleToggleAlarm } = useModalState(false);

  const alarmButtonRef = useRef<HTMLButtonElement>(null);

  const handleAlarm = () => {
    handleToggleAlarm();
    patchAlarm(patchAlarmRequset);
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
        <Alarm alarmButtonRef={alarmButtonRef} isAlarmOpen={isAlarmOpen} handleCloseAlarm={handleCloseAlarm} />
      </Responsive>
      <Responsive device="mobile">
        <MobileAlarm alarmButtonRef={alarmButtonRef} isAlarmOpen={isAlarmOpen} handleCloseAlarm={handleCloseAlarm} />
      </Responsive>
    </Styled.NoticeContainer>
  );
};

export default GNBProfile;
