import Image from 'next/image';
import Button from '@/components/common/Button';
import * as Styled from './style';

const EmptyPeopleTILSection = () => {
  return (
    <Styled.Root>
      <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
      <Styled.CardContainer>
        <Styled.ImageContainer>
          <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="다른 사람의 TIL이 없습니다." />
        </Styled.ImageContainer>

        <Styled.Description>
          <span>공개된 다른 TIL이 없습니다.</span>
          <span>해당 STEP 에 대한 TIL을 작성해보세요.</span>
        </Styled.Description>

        <Button css={Styled.ButtonStyles}>작성하러 가기</Button>
      </Styled.CardContainer>
    </Styled.Root>
  );
};

export default EmptyPeopleTILSection;
