import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import type { MemberTil } from '@/api/til/type';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

// 플러그인과 로케일 설정
dayjs.extend(relativeTime);
dayjs.locale('ko');

interface TILProps extends MemberTil {}

const TIL = (props: TILProps) => {
  const { userId, name, image, content, submitDate, commentNum } = props;

  return (
    <Styled.Root>
      <Styled.Header>
        <Avatar imageUrl={image} imageSize={40} alt="프로필 이미지" />
        <Styled.Container>
          <Styled.Name>{name}님</Styled.Name>
          <Styled.Date>{dayjs(submitDate).from(dayjs())}</Styled.Date>
        </Styled.Container>
      </Styled.Header>

      <Styled.Body>{content}</Styled.Body>

      <Styled.Footer>
        <Image src="/assets/icons/ic_comment.svg" width={16} height={16} alt="좋아요" />
        <span>{commentNum}</span>
      </Styled.Footer>
    </Styled.Root>
  );
};

export default TIL;
