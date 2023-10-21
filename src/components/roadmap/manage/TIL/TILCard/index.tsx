import Image from 'next/image';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

const TILCard = () => {
  return (
    <Styled.Root>
      <Styled.Header>
        <Avatar iconName="ic_profile" imageSize={34} alt="프로필 이미지" />
        <Styled.Name>김동영님</Styled.Name>
      </Styled.Header>

      <Styled.Body>
        최소한 국내에서 자바는 가장 시장 규모가 큰 언어입니다. 기업용 시장에서는 전통적인 강자였고, 안드로이드가 주류가
        되었습니다. 어메이징하쥬?
      </Styled.Body>

      <Styled.Footer>
        <Styled.TILInfoContainer>
          <span>2023-08-28 · 리액트 박살내기</span>
        </Styled.TILInfoContainer>

        <Styled.CommentContainer>
          <Image src="/assets/icons/ic_comment.svg" width={16} height={16} alt="좋아요" />
          <span>0</span>
        </Styled.CommentContainer>
      </Styled.Footer>
    </Styled.Root>
  );
};

export default TILCard;
