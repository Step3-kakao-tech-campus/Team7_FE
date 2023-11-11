import type { MouseEventHandler } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePostTils } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

interface StepProps {
  stepId: number;
  title: string;
  isSubmit: boolean;
  tilId: number | null;
  handleOpenReferenceAside: () => void;
  handleMobileSideBar?: () => void;
  autoSavedTimeHandler: {
    activeAutoSave: () => void;
    clearAutoSave: () => void;
  };
  handleStepTitle: (title: string) => void;
}

const Step = (props: StepProps) => {
  const {
    stepId,
    title,
    isSubmit,
    tilId,
    handleOpenReferenceAside,
    handleMobileSideBar,
    autoSavedTimeHandler,
    handleStepTitle,
  } = props;

  const router = useRouter();
  const { postTilsAsync } = usePostTils();

  const isActiveStep = stepId === Number(router.query.stepId);

  const handleSelectReference: MouseEventHandler = (e) => {
    e.stopPropagation();
    handleOpenReferenceAside();
    handleStepTitle(title);
  };

  // 틸 작성하기 페이지로 이동하기전에 해당 Step의 TIL이 생성되어있는지, 아닌지 분기 처리 하는 함수
  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;
    const roadmapId = Number(router.query.roadmapId) as number;
    autoSavedTimeHandler.clearAutoSave();
    if (tilId === NOT_TIL_CREATED_FOR_STEP) {
      const data = await postTilsAsync({ body: { roadmapId, stepId, title } });
      router.push(TILY_LINKS.tilWrite({ roadmapId, stepId, tilId: data?.result.id }));
    } else {
      router.push(TILY_LINKS.tilWrite({ roadmapId, stepId, tilId }));
    }

    handleMobileSideBar?.();
  };

  return (
    <Styled.Root isActiveStep={isActiveStep} onClick={routeTILWrite}>
      <Styled.Container>
        <Styled.CheckIconContainer>
          {isSubmit ? (
            <Image src={`/assets/icons/ic_checkButton.svg`} width={28} height={28} alt="체크 버튼" />
          ) : (
            <Image src={`/assets/icons/ic_uncheckButton.svg`} width={28} height={28} alt="체크 버튼" />
          )}
        </Styled.CheckIconContainer>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Container>

      {isActiveStep && (
        <Icon
          className="icon"
          css={Styled.ButtonStyles}
          onClick={handleSelectReference}
          iconName="ic_chevronRight"
          imageSize={14}
          ext="svg"
          alt="화살표"
        />
      )}
    </Styled.Root>
  );
};

export default Step;
