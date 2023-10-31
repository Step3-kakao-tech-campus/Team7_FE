import { useRouter } from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import * as Styled from '@/components/Roadmap/RoadmapDetail/RoadmapDetailInfo/style';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';

const RoadmapDetailInfo = () => {
  const router = useRouter();

  useGetRoadmapsById();
  return (
    <>
      <Flex justify="space-between">
        <h1>Next.js 입문</h1>
        <Button>신청하기</Button>
      </Flex>
      <Styled.InfoBox>
        <Flex align="center">
          <b>생성자</b> <Avatar imageSize={25} alt="생성자 이미지" /> <p>김동영</p>
        </Flex>
        <b>로드맵 설명</b>
        <p>Next.js는 ~~</p>
      </Styled.InfoBox>
    </>
  );
};

export default RoadmapDetailInfo;
