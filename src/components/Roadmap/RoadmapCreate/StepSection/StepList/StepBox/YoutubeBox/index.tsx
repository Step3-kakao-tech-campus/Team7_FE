import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeBox/style';
import Button from '@/components/common/Button';
import { useModalState } from '@/hooks/useModalState';
import YoutubeModal from '../YoutubeModal';

interface YoutubeBoxProps {
  idx: number;
  addYoutube: (idx: number, link: string) => void;
}

const YoutubeBox = (props: YoutubeBoxProps) => {
  const { idx, addYoutube } = props;
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
            유튜브 영상 추가
          </Button>
        </Styled.Header>
      </Styled.Root>
      <YoutubeModal isOpen={isOpen} onClose={handleClose} idx={idx} addYoutube={addYoutube} />
    </>
  );
};

export default YoutubeBox;
