import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal/style';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import type { RoadmapValid } from '@/hooks/useRoedmapCreate';
import type { Step } from '@/pages/roadmap/create';

interface StepModalProps extends ModalProps {
  step: Step;
  valid: RoadmapValid;
  handleOnChange: (name: string, value: string | Date | null) => void;
  resetStep: () => void;
  addStep: () => boolean;
}

const StepModal = (props: StepModalProps) => {
  const { isOpen, onClose, step, valid, handleOnChange, resetStep, addStep } = props;

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
            value={step.title}
            status={valid === 'step' ? 'error' : 'default'}
            message="필수 정보 입니다."
            onChange={(e) => {
              handleOnChange(e.target.name, e.target.value);
            }}
          />
        </Styled.Label>
        <Styled.Label>
          STEP 설명
          <TextArea
            placeholder="설명을 입력해주세요."
            rows={5}
            name="description"
            value={step.description}
            onChange={(e) => {
              handleOnChange(e.target.name, e.target.value);
            }}
          />
        </Styled.Label>

        <Styled.Label>
          STEP 마감기한
          <RadioButton
            label="종료일 이후 제출 제한"
            textPosition="right"
            textSize={0.8}
            checked={step.date !== null}
            onChange={() => handleOnChange('date', new Date())}
          />
          <Calendar
            onChangeDate={(date: Date) => handleOnChange('date', date)}
            isTimeInclude={true}
            disabled={step.date === null}
            minDate={new Date()}
          />
          <RadioButton
            label="기간 제한 없음"
            textPosition="right"
            textSize={0.8}
            checked={step.date === null}
            onChange={() => handleOnChange('date', null)}
          />
        </Styled.Label>
        <Styled.ButtonContainer>
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
              resetStep();
            }}>
            취소
          </Button>
          <Button
            onClick={() => {
              if (addStep()) onClose();
            }}>
            확인
          </Button>
        </Styled.ButtonContainer>
      </Styled.Root>
    </Modal>
  );
};

export default StepModal;
