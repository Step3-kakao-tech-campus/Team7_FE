import { useEffect, useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  useGetRoadmapSteps,
  useGetRoadmapsMy,
  usePostRoadmapStepIndividual,
  usePostRoadmaps,
} from '@/api/hooks/roadmap';
import { usePostTils } from '@/api/hooks/til';
import type { Step } from '@/api/type';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import ListItem from '@/components/gnb/UserGNB/desktop/Personal/ListItem';
import PlusButton from '@/components/gnb/UserGNB/desktop/PlusButton';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

const Personal = () => {
  const [roadmapId, setRoadmapId] = useState<number>(NOT_SELECTED);
  const [stepId, setStepId] = useState<number>(NOT_SELECTED);
  const [selectedStepTitle, setSelectedStepTitle] = useState<string>('');
  const [tilId, setTilId] = useState<number | null>(null);
  const [isRoadmapButtonSelected, setIsRoadmapButtonSelected] = useState<boolean>(false);
  const [isStepButtonSelected, setIsStepButtonSelected] = useState<boolean>(false);

  const router = useRouter();
  const { data: roadmaps } = useGetRoadmapsMy();
  const { steps } = useGetRoadmapSteps(roadmapId);
  const { postRoadmapsAsync } = usePostRoadmaps();
  const { postRoadmapStepIndividualAsync } = usePostRoadmapStepIndividual();
  const { postTilsAsync } = usePostTils();

  useEffect(() => {
    if (roadmaps.category.length !== 0) setRoadmapId(roadmaps.category[0].id);
  }, []);

  const {
    control: roadmapControl,
    handleSubmit: roadmapHandleSubmit,
    reset: roadmapReset,
    formState: { errors: roadmapErrors },
  } = useForm({
    defaultValues: {
      roadmapTitle: '',
    },
    mode: 'onSubmit',
  });

  const {
    control: stepControl,
    handleSubmit: stepHandleSubmit,
    reset: stepReset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stepTitle: '',
    },
    mode: 'onSubmit',
  });

  const createRoadmap: SubmitHandler<{ roadmapTitle: string }> = (formData) => {
    postRoadmapsAsync({
      body: { name: formData.roadmapTitle, description: null, isPublic: false, category: 'individual' },
    });
    roadmapReset();
    setIsRoadmapButtonSelected(false);
  };

  const createStep: SubmitHandler<{ stepTitle: string }> = (formData) => {
    postRoadmapStepIndividualAsync({ body: { roadmapId, title: formData.stepTitle } });
    stepReset();
    setIsStepButtonSelected(false);
  };

  // 틸 작성하기 페이지로 이동하기전에 해당 Step의 TIL이 생성되어있는지, 아닌지 분기 처리 하는 함수
  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;

    if (tilId === NOT_TIL_CREATED_FOR_STEP) {
      const data = await postTilsAsync({ body: { roadmapId, stepId, title: selectedStepTitle } });
      router.push(TILY_LINKS.tilWrite({ roadmapId, stepId, tilId: data?.result.id }));
    } else {
      router.push(TILY_LINKS.tilWrite({ roadmapId, stepId, tilId }));
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
        <div>카테고리</div>
        <div>TIL</div>
      </Styled.ModalInfo>

      <Card css={Styled.CardStyles}>
        <Styled.RoadmapSection>
          {isRoadmapButtonSelected ? (
            <Styled.Form onSubmit={roadmapHandleSubmit(createRoadmap)}>
              <Controller
                name="roadmapTitle"
                control={roadmapControl}
                rules={{
                  required: '카테고리명을 입력해주세요.',
                  pattern: {
                    value: /^(.{1,20})$/,
                    message: '글자수는 20자까지 입력가능합니다.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    css={Styled.InputContainerStyles}
                    inputStyles={Styled.InputStyles}
                    placeholder="카테고리명을 입력해주세요."
                    message={roadmapErrors.roadmapTitle?.message}
                    status={roadmapErrors.roadmapTitle ? 'error' : 'default'}
                    {...field}
                  />
                )}
              />
            </Styled.Form>
          ) : (
            <PlusButton
              testid="plusButton1"
              title="카테고리 추가하기"
              onClick={() => setIsRoadmapButtonSelected(true)}
            />
          )}
          <Styled.List>
            {roadmaps?.category.map((roadmap) => {
              return (
                <ListItem
                  roadmapId={roadmap.id}
                  selected={roadmapId === roadmap.id}
                  onClick={() => setRoadmapId(roadmap.id)}
                  key={roadmap.id}>
                  {roadmap.name}
                </ListItem>
              );
            })}
          </Styled.List>
        </Styled.RoadmapSection>

        <Styled.StepSection>
          {roadmapId !== NOT_SELECTED &&
            (isStepButtonSelected ? (
              <Styled.Form onSubmit={stepHandleSubmit(createStep)}>
                <Controller
                  name="stepTitle"
                  control={stepControl}
                  rules={{
                    required: 'TIL의 제목을 입력해주세요.',
                    pattern: {
                      value: /^(.{1,20})$/,
                      message: '글자수는 20자까지 입력가능합니다.',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      css={Styled.InputContainerStyles}
                      inputStyles={Styled.InputStyles}
                      placeholder="TIL의 제목을 입력해주세요."
                      message={errors.stepTitle?.message}
                      status={errors.stepTitle ? 'error' : 'default'}
                      {...field}
                    />
                  )}
                />
              </Styled.Form>
            ) : (
              <PlusButton testid="plusButton2" title="TIL 추가하기" onClick={() => setIsStepButtonSelected(true)} />
            ))}

          <Styled.List>
            {steps?.result.steps.map((step: Step) => {
              return (
                <ListItem
                  selected={stepId === step.id}
                  stepId={step.id}
                  roadmapId={roadmapId}
                  onClick={() => handleSelcteStep(step)}
                  key={step.id}>
                  {step.title}
                </ListItem>
              );
            })}
          </Styled.List>
        </Styled.StepSection>
      </Card>

      <Styled.ButtonContainer>
        <Button onClick={routeTILWrite} css={Styled.ButtonStyles}>
          완료
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default Personal;

const NOT_SELECTED = 0;
