import Image from 'next/image';
import type { MemberTil } from '@/api/til/type';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

const TILCard = (props: MemberTil) => {
  const { tilId, userId, name, image, content, submitDate, commentNum } = props;

  return (
    <Styled.Root>
      <Styled.Header>
        <Avatar imageUrl={image} imageSize={34} alt="프로필 이미지" />
        <Styled.Name>{name}님</Styled.Name>
      </Styled.Header>

      {content !== null && <Styled.Body>{content}</Styled.Body>}

      {submitDate !== null && (
        <Styled.Footer>
          <Styled.TILInfoContainer>
            <span>{submitDate}</span>
          </Styled.TILInfoContainer>

          <Styled.CommentContainer>
            <Image src="/assets/icons/ic_comment.svg" width={16} height={16} alt="댓글 이미지" />
            <span>{commentNum}</span>
          </Styled.CommentContainer>
        </Styled.Footer>
      )}
    </Styled.Root>
  );
};

export default TILCard;
