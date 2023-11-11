import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import ApplyModal from '@/components/roadmap/roadmapDetail/ApplyModal';
import * as Styled from '@/components/roadmap/roadmapDetail/RoadmapDetailInfo/style';
import useRoadmapApply from '@/components/roadmap/roadmapDetail/RoadmapDetailInfo/useRoadmapApply';
import TILY_LINKS from '@/constants/links';
import AuthRequireModal from '../AuthRequireModal';

interface RoadmapDetailInfoProps {
  isUserLogin: boolean;
}

const RoadmapDetailInfo = (props: RoadmapDetailInfoProps) => {
  const { isUserLogin } = props;
  const {
    data,
    category,
    roadmapId,
    myRole,
    isLoading,
    handleApply,
    routeTILWrite,
    router,
    isOpen,
    handleClose,
    handleOpen,
  } = useRoadmapApply();

  return (
    <>
      <Styled.RoadmapDetailInfo>
        <Flex justify="space-between" align="flex-start" gap={0.8}>
          <h1>{data?.result.name}</h1>
          {!isUserLogin ? (
            <Button onClick={handleOpen}>시작하기</Button>
          ) : myRole === 'none' ? (
            <Button onClick={handleApply} isLoading={category === 'group' && isLoading}>
              {category === 'group' ? '참여하기' : '학습하기'}
            </Button>
          ) : myRole === 'member' ? (
            <Button onClick={routeTILWrite}>학습하기</Button>
          ) : (
            <Flex gap={1}>
              <Button variant="outline" onClick={() => router.push(TILY_LINKS.manageInfo(roadmapId))}>
                로드맵 관리
              </Button>
              <Button onClick={routeTILWrite}>학습하기</Button>
            </Flex>
          )}
        </Flex>
        <Styled.InfoBox>
          <Flex align="center">
            <b>생성자</b> <Avatar imageUrl={data?.result.creator?.image} imageSize={25} alt="생성자 이미지" />
            <p>{data?.result.creator?.name}</p>
          </Flex>
          <b>로드맵 설명</b>
          <p>{data?.result.description}</p>
        </Styled.InfoBox>
      </Styled.RoadmapDetailInfo>
      {isUserLogin ? (
        <ApplyModal isOpen={isOpen} onClose={handleClose} />
      ) : (
        <AuthRequireModal isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
};

export default RoadmapDetailInfo;
