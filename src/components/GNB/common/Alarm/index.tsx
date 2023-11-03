import { Alarm } from '@/api/type';
import * as Styled from '@/components/GNB/common/Alarm/style';
import Avatar from '@/components/common/Avatar';
import TILY_LINKS from '@/constants/links';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface AlarmProps {
  alarm: Alarm;
}

const Alarm = (props: AlarmProps) => {
  const {alarm} = props;

  const router = useRouter();
  return (
    <Styled.Item
      key={alarm.id}
      onClick={() =>
        router.push(TILY_LINKS.tilWrite({ roadmapId: alarm.roadmap.id, stepId: alarm.step.id, tilId: alarm.tilId }))
      }>
      <Avatar imageSize={40} imageUrl={alarm.sender.image} alt="프로필 이미지" />
      <Styled.Content>
        <Styled.Title>
          {alarm.roadmap.name} - {alarm.step.title}
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
};

export default Alarm;

export const EmptyAlarm = () => {
  return (
    <Styled.EmptyAlarmRoot>
      <Image src="/assets/icons/ic_unAlarm.svg" width={36} height={36} alt="알림이 없습니다" />
      <Styled.EmptyAlarmText>알림이 없습니다.</Styled.EmptyAlarmText>
    </Styled.EmptyAlarmRoot>
  );
};
