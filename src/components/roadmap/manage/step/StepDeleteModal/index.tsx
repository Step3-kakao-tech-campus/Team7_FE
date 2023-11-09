import { useDeleteSteps } from '@/api/hooks/roadmap';
import { type StepWithReferences } from '@/api/type';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import type { ModalProps } from '@/components/common/Modal';
import Modal from '@/components/common/Modal';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import useQueryParam from '@/hooks/useQueryParam';

interface StepDeleteModalProps extends ModalProps {
  step: StepWithReferences;
}

const StepDeleteModal = (props: StepDeleteModalProps) => {
  const roadmapId = Number(useQueryParam('roadmapId'));
  const { step, isOpen, onClose } = props;
  const { deleteStepsAsync, isLoading } = useDeleteSteps(roadmapId);

  const handleStepDelete = async () => {
    await deleteStepsAsync({ stepId: step.id });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Flex dir="col" gap={1.5}>
        <h2>STEP 삭제하기</h2>
        <p>
          <b>{step.title}</b> STEP을 삭제하시겠습니까?
        </p>
        <TwoButtonContainer>
          <Button variant="ghost" onClick={onClose}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleStepDelete();
              onClose();
            }}
            isLoading={isLoading}>
            삭제
          </Button>
        </TwoButtonContainer>
      </Flex>
    </Modal>
  );
};

export default StepDeleteModal;
