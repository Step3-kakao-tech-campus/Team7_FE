import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePostTil } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import { tilyLinks } from '@/constants/links';
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

  const router = useRouter();
  const { postTil } = usePostTil();

  const handleSelectReference = () => {
    handleSelectStepReference(router.query.roadmapId as string, stepId.toString());
    handleOpenReferenceAside();
  };

  // 틸 작성하기 페이지로 이동하기전에 해당 Step의 TIL이 생성되어있는지, 아닌지 분기 처리 하는 함수
  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;
    const roadmapId = Number(router.query.roadmapId) as number;

    if (tilId === NOT_TIL_CREATED_FOR_STEP) {
      const data = await postTil({ roadmapId, stepId, title });
      router.push({ pathname: tilyLinks.tilWrite(), query: { roadmapId, stepId, tilId: data?.result.id } });
    } else {
      router.push({ pathname: tilyLinks.tilWrite(), query: { roadmapId, stepId, tilId } });
    }
  };

  return (
    <Styled.Root onClick={routeTILWrite}>
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
