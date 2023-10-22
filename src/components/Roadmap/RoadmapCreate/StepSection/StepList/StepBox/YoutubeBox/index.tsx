import ReferenceList from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/ReferenceList';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeBox/style';
import YoutubeModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeModal';
import Button from '@/components/common/Button';
import { useModalState } from '@/hooks/useModalState';

interface YoutubeBoxProps {
  idx: number;
}

const YoutubeBox = (props: YoutubeBoxProps) => {
  const { idx } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.Root>
        <Styled.Header>
          <h3>유튜브 링크</h3>
          <Button
            onClick={() => {
              handleOpen();
            }}>
            유튜브 영상 추가하기
          </Button>
        </Styled.Header>
        <ReferenceList type="youtube" stepIdx={idx} />
      </Styled.Root>
      <YoutubeModal isOpen={isOpen} onClose={handleClose} idx={idx} />
    </>
  );
};

export default YoutubeBox;
