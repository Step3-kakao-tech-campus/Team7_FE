import { useRecoilValue } from 'recoil';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeBox/style';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import Button from '@/components/common/Button';
import { useModalState } from '@/hooks/useModalState';
import YoutubeList from '../YoutubeList';
import YoutubeModal from '../YoutubeModal';

interface YoutubeBoxProps {
  idx: number;
}

const YoutubeBox = (props: YoutubeBoxProps) => {
  const { idx } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  const stepList = useRecoilValue(roadmapStepAtoms);

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
        {stepList[idx].references.youtube.length === 0 ? (
          <YoutubeList.Empty />
        ) : (
          <YoutubeList youtubes={stepList[idx].references.youtube} />
        )}
      </Styled.Root>
      <YoutubeModal isOpen={isOpen} onClose={handleClose} idx={idx} />
    </>
  );
};

export default YoutubeBox;
