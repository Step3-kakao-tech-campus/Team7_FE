import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import * as Styled from '@/components/roadmap/roadmapCreate/StepSection/StepModal/style';
import { type ReferenceLink } from '@/components/roadmap/roadmapCreate/states/roadmapCreateAtoms';

const StepModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: ' ',
      description: ' ',
      dueDate: new Date(),
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<> = async (formData) => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Styled.Root>
        <h2>STEP 추가하기</h2>

        <InfoArea>
          <InfoArea.Info>STEP은 로드맵의 한 단계입니다.</InfoArea.Info>
          <InfoArea.Info>STE들을 추가하여 로드맵을 완성해보세요.</InfoArea.Info>
          <InfoArea.Info>STEP에는 참고 자료와 동영상 자료를 삽입할 수 있습니다.</InfoArea.Info>
        </InfoArea>

        <Styled.Label>
          STEP 제목
          <Input
            placeholder="제목을 입력해주세요."
            name="title"
            value={stepForm.title}
            status={!stepValid ? 'error' : 'default'}
            message="필수 정보 입니다."
            onChange={(e) => {
              handleStepFormChange(e.target.name, e.target.value);
            }}
          />
        </Styled.Label>
        <Styled.Label>
          STEP 설명
          <TextArea
            placeholder="설명을 입력해주세요."
            rows={5}
            name="description"
            value={stepForm.description}
            onChange={(e) => {
              handleStepFormChange(e.target.name, e.target.value);
            }}
          />
        </Styled.Label>

        <Styled.Label>
          STEP 마감기한
          <RadioButton
            label="종료일 이후 제출 제한"
            textPosition="right"
            textSize={0.8}
            checked={!!stepForm.dueDate}
            onChange={() => {
              handleStepFormChange('dueDate', new Date());
            }}
          />
          {!!stepForm.dueDate && (
            <Calendar
              popperPlacement="top"
              onChangeDate={(date: Date) => handleStepFormChange('dueDate', date)}
              isTimeInclude={true}
              minDate={new Date()}
              date={stepForm.dueDate}
            />
          )}
          <RadioButton
            label="기간 제한 없음"
            textPosition="right"
            textSize={0.8}
            checked={!stepForm.dueDate}
            onChange={() => {
              handleStepFormChange('dueDate', null);
            }}
          />
        </Styled.Label>
        <Styled.ButtonContainer>
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
              type === 'edit' && idx !== undefined ? setStepForm(roadmap.steps[idx]) : handleResetStep();
            }}>
            취소
          </Button>
          <Button
            onClick={() => {
              type === 'edit' && idx !== undefined ? handleEditStep(onClose, idx) : handleCreateStep(onClose);
            }}>
            확인
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
    </Modal>
  );
};

export default StepModal;
