import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import { usePostTil } from '@/api/hooks/til';
import type { Step } from '@/api/type';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import * as Styled from '@/components/common/GNB/mobile/MobilePersonal/style';
import Icon from '@/components/common/Icon';
import { tilyLinks } from '@/constants/links';

const MobileRoadMap = () => {
  const router = useRouter();
  const [roadmapId, setRoadmapId] = useState<number>(NOT_SELECTED);
  const [stepId, setStepId] = useState<number>(NOT_SELECTED);
  const [selectedStepTitle, setSelectedStepTitle] = useState<string>('');
  const [tilId, setTilId] = useState<number | null>(null);

  const { data: roadmaps } = useGetRoadmapsMy();
  const { steps } = useGetRoadmapSteps(roadmapId);
  const { postTil } = usePostTil();

  // 틸 작성하기 페이지로 이동하기전에 해당 Step의 TIL이 생성되어있는지, 아닌지 분기 처리 하는 함수
  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;

    if (tilId === NOT_TIL_CREATED_FOR_STEP) {
      const data = await postTil({ roadmapId, stepId, title: selectedStepTitle });
      router.push(tilyLinks.tilWrite({ roadmapId, stepId, tilId: data?.result.id }));
    } else {
      router.push(tilyLinks.tilWrite({ roadmapId, stepId, tilId }));
    }
  };

  const handleSelcteStep = (step: Step) => {
    setStepId(step.id);
    setTilId(step.tilId);
    setSelectedStepTitle(step.title);
  };

  return (
    <>
      <Styled.ModalInfo>
        {roadmapId !== NOT_SELECTED && (
          <Icon
            iconName="ic_arrowLeft"
            alt="Logo"
            imageSize={20}
            ext="svg"
            css={Styled.BackSpaceStyles}
            onClick={() => setRoadmapId(NOT_SELECTED)}
          />
        )}
        {roadmapId === NOT_SELECTED ? <div>로드맵</div> : <div>STEP</div>}
      </Styled.ModalInfo>

      <Card css={Styled.CardStyles}>
        {roadmapId === NOT_SELECTED ? (
          <Styled.RoadmapSection>
            <Styled.List>
              {roadmaps?.roadmaps.map((roadmap) => {
                return (
                  <Styled.Item
                    selected={roadmapId === roadmap.id}
                    onClick={() => setRoadmapId(roadmap.id)}
                    key={roadmap.id}>
                    {roadmap.name}
                  </Styled.Item>
                );
              })}
            </Styled.List>
          </Styled.RoadmapSection>
        ) : (
          <Styled.StepSection>
            <Styled.List>
              {steps?.result.steps.map((step) => {
                return (
                  <Styled.Container key={step.id} selected={stepId === step.id}>
                    {step.isCompleted ? (
                      <Icon
                        css={Styled.IconStyles}
                        iconName="ic_checkButton"
                        imageSize={20}
                        ext="svg"
                        alt="체크 버튼"
                      />
                    ) : (
                      <Icon
                        css={Styled.IconStyles}
                        iconName="ic_uncheckButton"
                        imageSize={20}
                        ext="svg"
                        alt="체크 버튼"
                      />
                    )}
                    <Styled.Item
                      css={Styled.ItemStyles}
                      selected={stepId === step.id}
                      onClick={() => handleSelcteStep(step)}>
                      {step.title}
                    </Styled.Item>
                  </Styled.Container>
                );
              })}
            </Styled.List>
          </Styled.StepSection>
        )}
      </Card>

      <Styled.ButtonContainer>
        <Button onClick={routeTILWrite} css={Styled.ButtonStyles}>
          완료
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default MobileRoadMap;

const NOT_SELECTED = 0;
