import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  useGetRoadmapSteps,
  useGetRoadmaps,
  usePostRoadmapStepIndividual,
  usePostRoadmapsIndividual,
} from '@/api/hooks/roadmap';
import { usePostTil } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import * as Styled from './style';

interface FormInput {
  title: string;
  tilTitle: string;
}

const Personal = () => {
  const [roadmapId, setRoadmapId] = useState<number>(0);
  const [stepId, setStepId] = useState<number>(0);
  const [tilId, setTilId] = useState<number | null>(null);
  const [selectStepTitle, setSelectStepTitle] = useState<string>('');
  const [isRoadmapSelected, setIsRoadmapSelected] = useState<boolean>(false);
  const [isStepIdSelected, setIsStepIdSelected] = useState<boolean>(false);
  const [isTILCreatedForStep, setIsTILCreatedForStep] = useState<boolean>(false);

  const router = useRouter();
  const { data } = useGetRoadmaps();
  const { steps } = useGetRoadmapSteps(roadmapId);
  const { postRoadmapsIndividual } = usePostRoadmapsIndividual();
  const { postRoadmapStepIndividual } = usePostRoadmapStepIndividual();
  const { postTil } = usePostTil();

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      tilTitle: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormInput> = (formData) => {
    try {
      postRoadmapsIndividual(formData.title);
      reset();
      setIsRoadmapSelected(false);
    } catch {
      setError('title', {
        type: '400',
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    }
  };

  const onSubmit2: SubmitHandler<FormInput> = (formData) => {
    try {
      postRoadmapStepIndividual({ roadmapId, title: formData.tilTitle });
      reset();
      setIsStepIdSelected(false);
    } catch {
      setError('tilTitle', {
        type: '400',
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    }
  };

  // 틸 작성하기 페이지로 이동하기전에 해당 Step의 TIL이 생성되어있는지, 아닌지 분기 처리 하는 함수
  const routeTILWrite = async () => {
    if (isTILCreatedForStep) {
      router.push(`/TILWrite?roadmapId=${roadmapId}&?stepId=${stepId}&?tilId=${tilId}`);
    } else {
      const data = await postTil({ roadmapId, stepId, title: selectStepTitle });
      router.push(`/TILWrite?roadmapId=${roadmapId}&?stepId=${stepId}&?tilId=${data?.result.id}`);
    }
  };

  return (
    <>
      <Styled.ModalInfo>
        <div>카테고리</div>
        <div>TIL</div>
      </Styled.ModalInfo>

      <Card css={Styled.CardStyles}>
        <Styled.Left>
          {isRoadmapSelected ? (
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="title"
                control={control}
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
                    message={errors.title?.message}
                    status={errors.title ? 'error' : 'default'}
                    {...field}
                  />
                )}
              />
            </Styled.Form>
          ) : (
            <Styled.PlusButton onClick={() => setIsRoadmapSelected(true)}>
              <Image src="/assets/icons/ic_plusButton.svg" alt="plus" width={20} height={20} />
              <span>카테고리 추가하기</span>
            </Styled.PlusButton>
          )}
          <Styled.List>
            {data.category.map((item) => {
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
            {roadmapId !== 0 &&
              (isStepIdSelected ? (
                <Styled.Form onSubmit={handleSubmit(onSubmit2)}>
                  <Controller
                    name="tilTitle"
                    control={control}
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
                        message={errors.tilTitle?.message}
                        status={errors.tilTitle ? 'error' : 'default'}
                        {...field}
                      />
                    )}
                  />
                </Styled.Form>
              ) : (
                <Styled.PlusButton onClick={() => setIsStepIdSelected(true)}>
                  <Image src="/assets/icons/ic_plusButton.svg" alt="plus" width={20} height={20} />
                  <span>TIL 추가하기</span>
                </Styled.PlusButton>
              ))}

            {steps?.result.steps.map((step) => {
              return (
                <Styled.Item
                  selected={stepId === step.id}
                  onClick={() => {
                    setStepId(step.id);
                    setIsTILCreatedForStep(step.isCompleted);
                    setTilId(step.tilId);
                    setSelectStepTitle(step.title);
                  }}
                  key={step.id}>
                  {step.title}
                </Styled.Item>
              );
            })}
          </Styled.List>
        </Styled.Right>
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
