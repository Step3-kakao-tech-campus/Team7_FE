import Image from 'next/image';
import * as Styled from './style';

const Step = () => {
  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.CheckIconContainer>
          <Image src="/assets/icons/ic_checkButton.svg" width={28} height={28} alt="체크 버튼" />
        </Styled.CheckIconContainer>
        <Styled.Title>Java - 소개와 수업 소개</Styled.Title>
      </Styled.Container>
      <Styled.ReferenceButton>
        <Image className="icon" src="/assets/icons/ic_chevronRight.svg" width={14} height={14} alt="화살표" />
      </Styled.ReferenceButton>
    </Styled.Root>
  );
};

export default Step;
