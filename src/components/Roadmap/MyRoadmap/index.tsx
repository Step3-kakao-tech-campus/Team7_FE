import { useRouter } from 'next/router';
import MyRoadmapList from '@/components/Roadmap/MyRoadmap/MyRoadmapList';
import * as Style from '@/components/Roadmap/MyRoadmap/style';
import RoadmapCodeModal from '@/components/Roadmap/RoadmapCodeModal';
import Button from '@/components/common/Button';
import { tilyLinks } from '@/constants/links';
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
            variant="outline"
            onClick={() => {
              handleOpen();
            }}>
            코드로 참여하기
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              router.push(tilyLinks.roadmapCreate());
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
