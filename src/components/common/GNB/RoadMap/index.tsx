import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import { useGetRoadmaps, usePostRoadmapsIndividual } from '@/hooks/queries/roadmap';
import { useGetRoadmapSteps } from '@/hooks/queries/roadmap';
import { useGetTils } from '@/hooks/queries/til';
import { usePostTilsIndividual } from '@/hooks/queries/til';
import * as Styled from './style';

interface FormInput {
  title: string;
  tilTitle: string;
}

const RoadMap = () => {
  const router = useRouter();
  const [roadmapId, setRoadmapId] = useState<number>(0);
  const [stepId, setStepId] = useState<number>(0);
  const { data } = useGetRoadmaps();
  const { steps } = useGetRoadmapSteps(roadmapId);

  return (
    <>
      <Styled.ModalInfo>
        <div>로드맵</div>
        <div>STEP</div>
      </Styled.ModalInfo>

      <Card css={Styled.CardStyles}>
        <Styled.Left>
          <Styled.List>
            {data.roadmaps.map((item) => {
              return (
                <Styled.Item selected={roadmapId === item.id} onClick={() => setRoadmapId(item.id)} key={item.id}>
                  {item.name}
                </Styled.Item>
              );
            })}
          </Styled.List>
        </Styled.Left>

        <Styled.Right>
          <Styled.List>
            {steps?.result.steps.map((step) => {
              return (
                <Styled.Item selected={stepId === step.id} onClick={() => setStepId(step.id)} key={step.id}>
                  {step.title}
                </Styled.Item>
              );
            })}
          </Styled.List>
        </Styled.Right>
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
