import Image from 'next/image';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

interface StepProps {
  handleOpenReferenceAside: () => void;
}

const Step = (props: StepProps) => {
  const { handleOpenReferenceAside } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.CheckIconContainer>
          <Image src="/assets/icons/ic_checkButton.svg" width={28} height={28} alt="체크 버튼" />
        </Styled.CheckIconContainer>
        <Styled.Title>Java - 소개와 수업 소개</Styled.Title>
      </Styled.Container>

      <Icon
        className="icon"
        onClick={handleOpenReferenceAside}
        iconName="ic_chevronRight"
        imageSize={14}
        ext="svg"
        alt="화살표"
      />
    </Styled.Root>
  );
};

export default Step;
