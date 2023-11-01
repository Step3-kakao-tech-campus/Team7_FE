import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import * as Styled from '@/components/Roadmap/RoadmapDetail/RoadmapDetailInfo/style';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';
import ApplyModal from '../ApplyModal';

const RoadmapDetailInfo = () => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const { data } = useGetRoadmapsById(Number(roadmapId));

  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.Root>
        <Flex justify="space-between" align="flex-start" gap={0.8}>
          <h1>{data?.result.name}</h1>
          {data?.result.role === null ? (
            <Button onClick={handleOpen}>신청하기</Button>
          ) : (
            <Button
              onClick={() => {
                // tilyLinks.tilWrite();
              }}>
              학습하기
            </Button>
          )}
        </Flex>
        <Styled.InfoBox>
          <Flex align="center">
            <b>생성자</b> <Avatar imageSize={25} alt="생성자 이미지" />
            {/* <p>{data?.result.creator.name}</p> */}
          </Flex>
          <b>로드맵 설명</b>
          <p>{data?.result.description}</p>
        </Styled.InfoBox>
      </Styled.Root>
      <ApplyModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default RoadmapDetailInfo;
