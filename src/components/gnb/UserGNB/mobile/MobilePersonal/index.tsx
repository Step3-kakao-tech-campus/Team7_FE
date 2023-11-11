import { useEffect, useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useGetRoadmapSteps, useGetRoadmapsMy, usePostRoadmapsIndividial, usePostSteps } from '@/api/hooks/roadmap';
import { usePostTils } from '@/api/hooks/til';
import type { Step } from '@/api/type';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';
import ListItem from '@/components/gnb/UserGNB/desktop/Personal/ListItem';
import PlusButton from '@/components/gnb/UserGNB/desktop/PlusButton';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

const MobilePersonal = () => {
  const [roadmapId, setRoadmapId] = useState<number>(NOT_SELECTED);
  const [stepId, setStepId] = useState<number>(NOT_SELECTED);
  const [selectedStepTitle, setSelectedStepTitle] = useState<string>('');
  const [tilId, setTilId] = useState<number | null>(null);
  const [isRoadmapButtonSelected, setIsRoadmapButtonSelected] = useState<boolean>(false);
  const [isStepButtonSelected, setIsStepButtonSelected] = useState<boolean>(false);
  const [isRenderNextButton, setIsRenderNextButton] = useState<boolean>(false);

  const router = useRouter();
  const { data: roadmaps } = useGetRoadmapsMy();
  const { steps } = useGetRoadmapSteps(roadmapId);
  const { postRoadmapsIndividialAsync } = usePostRoadmapsIndividial();
  const { postStepsAsync } = usePostSteps();
  const { postTilsAsync } = usePostTils();

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
    postRoadmapsIndividialAsync({
      body: { name: formData.roadmapTitle, description: null, isPublic: false, category: 'individual' },
    });
    roadmapReset();
    setIsRoadmapButtonSelected(false);
  };

  const createStep: SubmitHandler<{ stepTitle: string }> = (formData) => {
    postStepsAsync({ body: { roadmapId, title: formData.stepTitle, description: null, dueDate: null } });
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
        {isRenderNextButton && (
          <Icon
            iconName="ic_arrowLeft"
            alt="Logo"
            imageSize={20}
            ext="svg"
            css={Styled.BackSpaceStyles}
            onClick={() => {
              setRoadmapId(NOT_SELECTED);
              setIsRenderNextButton(false);
            }}
          />
        )}
        {isRenderNextButton ? <div>TIL</div> : <div>카테고리</div>}
      </Styled.ModalInfo>
      <Card css={Styled.CardStyles}>
        {isRenderNextButton ? (
          <Styled.StepSection>
            {isStepButtonSelected ? (
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
                      onBlur={() => setIsStepButtonSelected(false)}
                    />
                  )}
                />
              </Styled.Form>
            ) : (
              <PlusButton title="TIL 추가하기" onClick={() => setIsStepButtonSelected(true)} />
            )}

            <Styled.List>
              {steps?.result.steps.map((step: Step) => {
                return (
                  <ListItem
                    roadmapId={roadmapId}
                    stepId={step.id}
                    selected={stepId === step.id}
                    onClick={() => handleSelcteStep(step)}
                    key={step.id}>
                    {step.title}
                  </ListItem>
                );
              })}
            </Styled.List>
          </Styled.StepSection>
        ) : (
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
                      onBlur={() => setIsRoadmapButtonSelected(false)}
                    />
                  )}
                />
              </Styled.Form>
            ) : (
              <PlusButton title="카테고리 추가하기" onClick={() => setIsRoadmapButtonSelected(true)} />
            )}
            <Styled.List>
              {roadmaps?.category.map((roadmap) => {
                return (
                  <ListItem
                    roadmapId={roadmap.id}
                    selected={roadmapId === roadmap.id}
                    onClick={() => {
                      setRoadmapId(roadmap.id);
                    }}
                    key={roadmap.id}>
                    {roadmap.name}
                  </ListItem>
                );
              })}
            </Styled.List>
          </Styled.RoadmapSection>
        )}
      </Card>

      <Styled.ButtonContainer>
        {isRenderNextButton ? (
          <Button onClick={routeTILWrite} css={Styled.ButtonStyles}>
            완료
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsRenderNextButton(true);
            }}
            css={Styled.ButtonStyles}>
            다음
          </Button>
        )}
      </Styled.ButtonContainer>
    </>
  );
};

export default MobilePersonal;

const NOT_SELECTED = 0;
