import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { MemberTil } from '@/api/type';
import Avatar from '@/components/common/Avatar';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

// 플러그인과 로케일 설정
dayjs.extend(relativeTime);
dayjs.locale('ko');

const TILCard = (props: MemberTil) => {
  const router = useRouter();

  const { tilId, userId, name, image, content, submitDate, commentNum } = props;

  const handleRouteTILView = () => {
    if (content === null) return;

    router.push(
      TILY_LINKS.tilView({
        roadmapId: Number(router.query.roadmapId),
        stepId: Number(router.query.stepId),
        tilId: tilId as number,
      }),
    );
  };

  const parseString = (html: any) => {
    // DOM Parser를 생성합니다. 문자열로 된 데이터를 DOM Document로 변환합니다.
    const doc = new DOMParser().parseFromString(html, 'text/html');

    // parsed document에서 textContent를 사용하여 순수 텍스트만을 추출합니다.
    return doc.body.textContent || '';
  };

  return (
    <Styled.Root onClick={handleRouteTILView}>
      <Styled.Header>
        <Avatar imageUrl={image} imageSize={34} alt="프로필 이미지" />
        <Styled.Name>{name}님</Styled.Name>
      </Styled.Header>

      {content !== null && <Styled.Body>{parseString(content)}</Styled.Body>}

      {submitDate !== null && (
        <Styled.Footer>
          <Styled.TILInfoContainer>
            <span>{dayjs(submitDate).from(dayjs())}</span>
          </Styled.TILInfoContainer>

          {submitDate !== null && content === null && (
            <Styled.CommentContainer>
              <Image src="/assets/icons/ic_comment.svg" width={16} height={16} alt="댓글 이미지" />
              <span>{commentNum}</span>
            </Styled.CommentContainer>
          )}
        </Styled.Footer>
      )}
    </Styled.Root>
  );
};

export default TILCard;
