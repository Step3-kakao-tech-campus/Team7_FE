import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import * as Styled from '@/components/Roadmap/RoadmapDetail/RoadmapDetailInfo/style';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import useQueryParam from '@/hooks/useQueryParam';

const RoadmapDetailInfo = () => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const data = useGetRoadmapsById(Number(roadmapId));

  return (
    <>
      <Flex justify="space-between">
        <h1>{data?.result.name}</h1>
        <Button>신청하기</Button>
      </Flex>
      <Styled.InfoBox>
        <Flex align="center">
          <b>생성자</b> <Avatar imageSize={25} alt="생성자 이미지" />
          {/* <p>{data?.result.creator.name}</p> */}
        </Flex>
        <b>로드맵 설명</b>
        <p>{data?.result.description}</p>
      </Styled.InfoBox>
    </>
  );
};

export default RoadmapDetailInfo;
