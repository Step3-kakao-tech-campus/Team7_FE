import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmaps } from '@/api/hooks/roadmap';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

const RoadMap = () => {
  const router = useRouter();
  const [roadmapId, setRoadmapId] = useState<number>(0);
  const [stepId, setStepId] = useState<number>(0);
  const { data: roadmaps } = useGetRoadmaps();
  const { steps } = useGetRoadmapSteps(roadmapId);

  return (
    <>
      <Styled.ModalInfo>
        <div>로드맵</div>
        <div>STEP</div>
      </Styled.ModalInfo>

      <Card css={Styled.CardStyles}>
        <Styled.RoadmapSection>
          <Styled.List>
            {roadmaps.roadmaps.map((roadmap) => {
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

        <Styled.StepSection>
          <Styled.List>
            {steps?.result.steps.map((step) => {
              return (
                <Styled.Container key={step.id} selected={stepId === step.id}>
                  {step.isCompleted ? (
                    <Icon css={Styled.IconStyles} iconName="ic_checkButton" imageSize={20} ext="svg" alt="체크 버튼" />
                  ) : (
                    <Icon
                      css={Styled.IconStyles}
                      iconName="ic_uncheckButton"
                      imageSize={20}
                      ext="svg"
                      alt="체크 버튼"
                    />
                  )}
                  <Styled.Item css={Styled.ItemStyles} selected={stepId === step.id} onClick={() => setStepId(step.id)}>
                    {step.title}
                  </Styled.Item>
                </Styled.Container>
              );
            })}
          </Styled.List>
        </Styled.StepSection>
      </Card>

      <Styled.ButtonContainer>
        <Button onClick={() => router.push('/TILWrite')} css={Styled.ButtonStyles}>
          완료
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default RoadMap;
