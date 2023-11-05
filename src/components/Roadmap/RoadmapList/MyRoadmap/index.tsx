import { useRouter } from 'next/router';
import MyRoadmapList from '@/components/Roadmap/RoadmapList/MyRoadmap/MyRoadmapList';
import * as Style from '@/components/Roadmap/RoadmapList/MyRoadmap/style';
import RoadmapCodeModal from '@/components/Roadmap/RoadmapList/RoadmapCodeModal';
import Button from '@/components/common/Button';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';

const MyRoadmap = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();

  return (
    <>
      <Style.Header>
        <h2>참여중인 로드맵</h2>
        <Style.ButtonContainer>
          <Button
            variant="default"
            onClick={() => {
              handleOpen();
            }}>
            코드 참여
          </Button>
          <Button
            variant="default"
            onClick={() => {
              router.push(TILY_LINKS.roadmapCreate());
            }}>
            로드맵 생성
          </Button>
        </Style.ButtonContainer>
      </Style.Header>
      <MyRoadmapList />
      <RoadmapCodeModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default MyRoadmap;
