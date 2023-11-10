import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import * as Styled from '@/components/roadmap/roadmapList/MyRoadmap/MyRoadmapHeader/style';
import RoadmapCodeModal from '@/components/roadmap/roadmapList/RoadmapCodeModal';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';

const MyRoadmapHeader = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();
  return (
    <>
      <Styled.Header>
        <h1>참여중인 로드맵</h1>

        {/* 웹 접근성 고려, 숨김 헤더 */}
        <h2>참여중인 틸리, 그룹 로드맵</h2>
        <Styled.ButtonContainer>
          <Button
            variant="outline"
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
        </Styled.ButtonContainer>
      </Styled.Header>
      <RoadmapCodeModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default MyRoadmapHeader;
