import Image from 'next/image';
import { useRouter } from 'next/router';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

interface StepProps {
  stepId: number;
  title: string;
  isCompleted: boolean;
  tilId: number | null;
  handleOpenReferenceAside: () => void;
  handleSelectStepReference: (roadmapId: string, stepId: string) => void;
}

const Step = (props: StepProps) => {
  const { stepId, title, isCompleted, tilId, handleOpenReferenceAside, handleSelectStepReference } = props;

  const { query } = useRouter();

  const handleSelectReference = () => {
    handleSelectStepReference(query.roadmapId as string, stepId.toString());
    handleOpenReferenceAside();
  };

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.CheckIconContainer>
          {isCompleted ? (
            <Image src="/assets/icons/ic_checkButton.svg" width={28} height={28} alt="체크 버튼" />
          ) : (
            <Image src="/assets/icons/ic_unCheckButton.svg" width={28} height={28} alt="체크 버튼" />
          )}
        </Styled.CheckIconContainer>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Container>

      <Icon
        className="icon"
        onClick={handleSelectReference}
        iconName="ic_chevronRight"
        imageSize={14}
        ext="svg"
        alt="화살표"
      />
    </Styled.Root>
  );
};

export default Step;
