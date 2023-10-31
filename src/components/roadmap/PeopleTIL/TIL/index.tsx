import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { MemberTil } from '@/api/til/type';
import Avatar from '@/components/common/Avatar';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

// 플러그인과 로케일 설정
dayjs.extend(relativeTime);
dayjs.locale('ko');

// type NonNullableMemberTil = {
//   [P in keyof MemberTil]: NonNullable<MemberTil[P]>;
// };

const TIL = (props: MemberTil) => {
  const { tilId, name, image, content, submitDate, commentNum } = props;

  const router = useRouter();

  const handleRouteTILView = () => {
    router.push(
      tilyLinks.tilView({
        roadmapId: Number(router.query.roadmapId),
        stepId: Number(router.query.stepId),
        tilId: tilId as number,
      }),
    );
  };

  return (
    <Styled.Root onClick={handleRouteTILView}>
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
