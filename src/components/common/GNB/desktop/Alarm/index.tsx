import dayjs from 'dayjs';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetAlarms } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import TILY_LINKS from '@/constants/links';
import useAuth from '@/hooks/useAuth';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';
import { Alarm } from '@/api/type';

interface AlarmProps {
  alarmButtonRef: React.RefObject<HTMLButtonElement>;
  isAlarmOpen: boolean;
  handleCloseAlarm: () => void;
}

const Alarm = (props: AlarmProps) => {
  const { handleCloseAlarm, isAlarmOpen, alarmButtonRef } = props;

  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { alarms } = useGetAlarms();
  const { logout } = useAuth();

  useOnClickOutside(ref, (event) => {
    // 유저가 헤더의 프로필이미지를 클릭하면 useOnClickOutside가 실행되고 다시 handleToggleAlarm가 실행되어서 알림창이 다시 열리는 현상이 발생함
    // 이를 방지하기 위해 알림창이 열려있는 상태에서 프로필이미지를 클릭하면 알림창이 닫히지 않도록 함
    if(!alarmButtonRef.current || alarmButtonRef.current.contains(event?.target as Node)) return 

    handleCloseAlarm();
  });

  if(!isAlarmOpen) return null;

  return (
    <Styled.Root ref={ref}
    initial="closed"
    animate={isAlarmOpen ? 'open' : 'closed'}
    variants={{
      open: { opacity: 1 },
      closed: { opacity: 0 },
    }}
    transition={{ type: 'tween', duration: 0.1 }}>
      <Styled.Header>알림</Styled.Header>

      <Styled.List>
        {alarms.length === 0 ? (
          <EmptyAlarm />
        ) : (
          alarms.map((alarm:Alarm) => {
            return (
              <Styled.Item key={alarm.id} onClick={() => router.push(TILY_LINKS.tilWrite({roadmapId: alarm.roadmap.id, stepId: alarm.step.id, tilId: alarm.tilId}))}>
                <Avatar imageSize={40} imageUrl={alarm.sender.image} alt="프로필 이미지" />
                <Styled.Content>
                  <Styled.Title>
                    {alarm.roadmap.name} - {alarm.step.name}
                  </Styled.Title>
                  <Styled.Description>
                    <Styled.Commenter>
                      <span>{alarm.sender.name}</span>
                      <span>님이 댓글을 남겼습니다.</span>
                    </Styled.Commenter>

                    <Styled.Time>{dayjs(alarm.createdAt).format('YYYY.MM.DD')}</Styled.Time>
                  </Styled.Description>
                </Styled.Content>
              </Styled.Item>
            );
          })
        )}
      </Styled.List>

      <Styled.Footer>
        <button onClick={() => router.push(TILY_LINKS.mypage())}>
          <Image src="/assets/icons/ic_smile.svg" width={20} height={20} alt="마이페이지 버튼 아이콘" />
          <span>마이페이지</span>
        </button>

        <button onClick={() => logout()}>
          <Image src="/assets/icons/ic_unlock.svg" width={20} height={20} alt="마이페이지 버튼 아이콘" />
          <span>로그아웃</span>
        </button>
      </Styled.Footer>
    </Styled.Root>
  );
};

export default Alarm;

const EmptyAlarm = () => {
  return (
    <Styled.EmptyAlarmRoot>
      <Image src="/assets/icons/ic_unAlarm.svg" width={36} height={36} alt="알림이 없습니다" />
      <Styled.EmptyAlarmText>알림이 없습니다.</Styled.EmptyAlarmText>
    </Styled.EmptyAlarmRoot>
  );
};
