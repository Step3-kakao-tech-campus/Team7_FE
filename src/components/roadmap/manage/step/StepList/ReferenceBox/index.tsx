import { StepWithReferences } from '@/api/type';
import Button from '@/components/common/Button';
import ReferenceList from '@/components/roadmap/manage/step/StepList/ReferenceList';
import * as Styled from '@/components/roadmap/manage/step/StepList/YoutubeBox/style';
import YoutubeModal from '@/components/roadmap/manage/step/StepList/YoutubeModal';
import { useModalState } from '@/hooks/useModalState';
import WebModal from '../WebModal';

interface ReferenceBoxProps {
  step: StepWithReferences;
  type: '유튜브 영상' | '참고자료';
}

const ReferenceBox = (props: ReferenceBoxProps) => {
  const { step, type } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.Root>
        <Styled.Header>
          <h3>{type} 링크</h3>
          <Button
            onClick={() => {
              handleOpen();
            }}>
            {type} 추가하기
          </Button>
        </Styled.Header>
        <ReferenceList type={type} step={step} />
      </Styled.Root>
      {type === '참고자료' ? (
        <WebModal step={step} isOpen={isOpen} onClose={handleClose} />
      ) : (
        <YoutubeModal step={step} isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
};

export default ReferenceBox;
