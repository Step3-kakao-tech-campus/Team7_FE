import dayjs from 'dayjs';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetAlarms } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import { tilyLinks } from '@/constants/links';
import useAuth from '@/hooks/useAuth';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { getTilWriteUrl } from '@/utils/getTilWriteUrl';
import * as Styled from './style';
import { Alarm } from '@/api/user/type';

interface AlarmProps {
  handleCloseAlarm: () => void;
}

const Alarm = (props: AlarmProps) => {
  const { handleCloseAlarm } = props;

  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { alarms } = useGetAlarms();
  const { logout } = useAuth();

  useOnClickOutside(ref, () => {
    handleCloseAlarm();
  });

  return (
    <Styled.Root ref={ref}>
      <Styled.Header>알림</Styled.Header>

      <Styled.List>
        {alarms.length === 0 ? (
          <EmptyAlarm />
        ) : (
          alarms.map((alarm:Alarm) => {
            return (
              <Styled.Item key={alarm.id} onClick={() => router.push(getTilWriteUrl(alarm.roadmap.id, alarm.step.id, alarm.tilId))}>
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
        <button onClick={() => router.push(tilyLinks.mypage())}>
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
