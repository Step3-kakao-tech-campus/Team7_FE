import ReferenceList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/ReferenceList';
import WebModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/WebModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeBox/style';
import Button from '@/components/common/Button';
import { useModalState } from '@/hooks/useModalState';

interface WebBoxProps {
  idx: number;
}

const WebBox = (props: WebBoxProps) => {
  const { idx } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.Root>
        <Styled.Header>
          <h3>참고자료 링크</h3>
          <Button
            onClick={() => {
              handleOpen();
            }}>
            참고자료 추가하기
          </Button>
        </Styled.Header>
        <ReferenceList type="web" stepIdx={idx} />
      </Styled.Root>
      <WebModal isOpen={isOpen} onClose={handleClose} idx={idx} />
    </>
  );
};

export default WebBox;
