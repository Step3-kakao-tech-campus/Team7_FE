import Image from 'next/image';
import { useGetAlarms } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

  const { alarms } = useGetAlarms();
  return (
    <Styled.Root>
      <Styled.Header>알림</Styled.Header>

      <Styled.List>
        {alarms.length === 0 ? (
          <EmptyAlarm />
        ) : (
          alarms.map((alarm) => {
            return (
              <Styled.Item key={alarm.id}>
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

              <Styled.Time>2023.06.16</Styled.Time>
            </Styled.Description>
          </Styled.Content>
        </Styled.Item>

        <Styled.Item>
          <Avatar imageSize={40} iconName="ic_profile" />
          <Styled.Content>
            <Styled.Title>Next JS 입문 - 6. SPA</Styled.Title>
            <Styled.Description>
              <Styled.Commenter>
                <span>동영</span>
                <span>님이 댓글을 남겼습니다.</span>
              </Styled.Commenter>

              <Styled.Time>2023.06.16</Styled.Time>
            </Styled.Description>
          </Styled.Content>
        </Styled.Item>

        <Styled.Item>
          <Avatar imageSize={40} iconName="ic_profile" />
          <Styled.Content>
            <Styled.Title>Next JS 입문 - 6. SPA</Styled.Title>
            <Styled.Description>
              <Styled.Commenter>
                <span>동영</span>
                <span>님이 댓글을 남겼습니다.</span>
              </Styled.Commenter>

              <Styled.Time>2023.06.16</Styled.Time>
            </Styled.Description>
          </Styled.Content>
        </Styled.Item>

        <Styled.Item>
          <Avatar imageSize={40} iconName="ic_profile" />
          <Styled.Content>
            <Styled.Title>Next JS 입문 - 6. SPA</Styled.Title>
            <Styled.Description>
              <Styled.Commenter>
                <span>동영</span>
                <span>님이 댓글을 남겼습니다.</span>
              </Styled.Commenter>

              <Styled.Time>2023.06.16</Styled.Time>
            </Styled.Description>
          </Styled.Content>
        </Styled.Item>

        <Styled.Item>
          <Avatar imageSize={40} iconName="ic_profile" />
          <Styled.Content>
            <Styled.Title>Next JS 입문 - 6. SPA</Styled.Title>
            <Styled.Description>
              <Styled.Commenter>
                <span>동영</span>
                <span>님이 댓글을 남겼습니다.</span>
              </Styled.Commenter>

              <Styled.Time>2023.06.16</Styled.Time>
            </Styled.Description>
          </Styled.Content>
        </Styled.Item>
      </Styled.List>

      <Styled.Footer>
        <button>
          <Image src="/assets/icons/ic_smile.svg" width={20} height={20} alt="마이페이지 버튼 아이콘" />
          <span>마이페이지</span>
        </button>

        <button>
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
      <Image src="/assets/icons/ic_unAlarm.svg" width={40} height={40} alt="알림이 없습니다" />
      <Styled.EmptyAlarmRoot>알림이 없습니다.</Styled.EmptyAlarmRoot>
    </Styled.EmptyAlarmRoot>
  );
};
