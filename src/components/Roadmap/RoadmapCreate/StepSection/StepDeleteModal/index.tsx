import { useRecoilState } from 'recoil';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal/style';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import Button from '@/components/common/Button';
import type { ModalProps } from '@/components/common/Modal';
import Modal from '@/components/common/Modal';

interface StepDeleteModalProps extends ModalProps {
  idx: number;
}

const StepDeleteModal = (props: StepDeleteModalProps) => {
  const { idx, isOpen, onClose } = props;
  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);

  const handleStepDelete = () => {
    const newStepList = [...stepList];
    newStepList.splice(idx, 1);
    setStepList(newStepList);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} width={35}>
        <Styled.Root>
          <h2>STEP 삭제하기</h2>
          <p>
            <b>{stepList[idx].title}</b> STEP을 삭제하시겠습니까?
          </p>
          <Styled.ButtonContainer>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button
              onClick={() => {
                handleStepDelete();
                onClose();
              }}>
              확인
            </Button>
          </Styled.ButtonContainer>
        </Styled.Root>
      </Modal>
    </>
  );
};

export default StepDeleteModal;
