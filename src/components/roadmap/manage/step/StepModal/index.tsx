import { useEffect } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { usePatchSteps, usePostSteps } from '@/api/hooks/roadmap';
import { type PostStepsRequest } from '@/api/roadmap/type';
import { type StepWithReferences } from '@/api/type';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import Flex from '@/components/common/Flex';
import FlexForm from '@/components/common/FlexForm';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import useQueryParam from '@/hooks/useQueryParam';
import preventEnterSubmit from '@/utils/preventEnterSubmit';

interface StepModalProps extends ModalProps {
  isEdit?: boolean;
  step?: StepWithReferences;
}

const StepModal = (props: StepModalProps) => {
  const { isEdit = false, step, isOpen, onClose } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));
  const { postStepsAsync, isLoading: createLoading } = usePostSteps();
  const { patchStepsAsync, isLoading: editLoading } = usePatchSteps(roadmapId);

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<PostStepsRequest, 'roadmapId'>>({
    defaultValues: {
      title: '',
      description: '',
      dueDate: new Date(),
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (step) {
      setValue('title', step.title);
      setValue('description', step.description);
      setValue('dueDate', step.dueDate ? new Date(step.dueDate) : null);
    }
  }, [step, setValue]);

  const onSubmit: SubmitHandler<Omit<PostStepsRequest, 'roadmapId'>> = async (formData) => {
    if (!isEdit) {
      const data = await postStepsAsync({ body: { roadmapId, ...formData } });
      if (data.code === 201) {
        reset();
        onClose();
      }
      return;
    }
    if (isEdit && step) {
      const data = await patchStepsAsync({ stepId: step?.id, body: formData });
      if (data.code === 200) {
        reset();
        onClose();
      }
      return;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35} showCloseButton={false} isOnClickOutsideClose={false}>
      <Flex dir="col" gap={1.5}>
        {isEdit ? <h2>STEP 수정하기</h2> : <h2>STEP 추가하기</h2>}

        <InfoArea>
          <InfoArea.Info>STEP은 로드맵의 한 단계입니다.</InfoArea.Info>
          <InfoArea.Info>STEP들을 추가하여 로드맵을 완성해보세요.</InfoArea.Info>
          <InfoArea.Info>STEP에는 참고 자료와 동영상 자료를 삽입할 수 있습니다.</InfoArea.Info>
        </InfoArea>

        <FlexForm onSubmit={handleSubmit(onSubmit)} onKeyDown={preventEnterSubmit}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'STEP 제목을 입력해주세요.' }}
            render={({ field }) => (
              <Input
                label="STEP 제목"
                labelType="bold"
                placeholder="제목을 입력해주세요."
                status={errors.title && 'error'}
                message={errors.title?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { value, ...props } }) => (
              <TextArea
                label="STEP 설명"
                labelType="bold"
                value={value === null ? '' : value}
                placeholder="설명을 입력해주세요."
                rows={5}
                {...props}
              />
            )}
          />
          <Controller
            name="dueDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <section>
                <h3>마감 기한</h3>
                <Flex align="center" gap={1}>
                  <RadioButton
                    label="종료일 이후 제출 제한"
                    textPosition="right"
                    textSize={0.8}
                    checked={value !== null}
                    onChange={() => onChange(new Date())}
                  />
                  <Calendar
                    popperPlacement="top"
                    onChangeDate={(date: Date | null) => {
                      onChange(date);
                    }}
                    isTimeInclude={true}
                    minDate={new Date()}
                    date={value}
                    disabled={value === null}
                  />
                </Flex>

                <RadioButton
                  label="기간 제한 없음"
                  textPosition="right"
                  textSize={0.8}
                  checked={value === null}
                  onChange={() => onChange(null)}
                />
              </section>
            )}
          />
          <TwoButtonContainer>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                if (!isEdit) reset();
                onClose();
              }}>
              취소
            </Button>
            <Button type="submit" isLoading={createLoading || editLoading}>
              확인
            </Button>
          </TwoButtonContainer>
        </FlexForm>
      </Flex>
    </Modal>
  );
};

export default StepModal;
