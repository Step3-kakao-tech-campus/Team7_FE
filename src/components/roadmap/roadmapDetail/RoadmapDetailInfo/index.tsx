import router from 'next/router';
import { useGetRoadmapsById } from '@/api/hooks/roadmap';
import { postTil } from '@/api/til';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { useToast } from '@/components/common/Toast/useToast';
import * as Styled from '@/components/roadmap/roadmapDetail/RoadmapDetailInfo/style';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';
import ApplyModal from '../ApplyModal';

const RoadmapDetailInfo = () => {
  const roadmapId = useQueryParam('roadmapId');
  const toast = useToast();

  const { data } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });

  const myRole = data?.result.myRole;

  const { isOpen, handleOpen, handleClose } = useModalState();

  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;

    if (!data?.result.steps.length) {
      toast.showBottom({ message: '생성된 STEP이 없습니다.' });
    } else {
      const recentTilId = data?.result.recentTilId;
      const recentStepId = data?.result.recentStepId;
      if (recentTilId === NOT_TIL_CREATED_FOR_STEP) {
        const step = data?.result.steps[0];
        const tilData = await postTil({
          param: { roadmapId: Number(roadmapId), stepId: step.id },
          body: { title: step.title },
        });
        router.push(TILY_LINKS.tilWrite({ roadmapId: Number(roadmapId), stepId: step.id, tilId: tilData?.result.id }));
      } else if (recentStepId !== NOT_TIL_CREATED_FOR_STEP) {
        router.push(
          TILY_LINKS.tilWrite({
            roadmapId: Number(roadmapId),
            stepId: Number(recentStepId),
            tilId: Number(recentTilId),
          }),
        );
      }
    }
  };

  return (
    <>
      <Styled.Root>
        <Flex justify="space-between" align="flex-start" gap={0.8}>
          <h1>{data?.result.name}</h1>
          {myRole === 'none' ? (
            <Button onClick={handleOpen}>신청하기</Button>
          ) : myRole === 'member' ? (
            <Button onClick={routeTILWrite}>학습하기</Button>
          ) : (
            <Flex gap={1}>
              <Button variant="outline" onClick={() => router.push(TILY_LINKS.manageGroupInfo(Number(roadmapId)))}>
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
      </Styled.Root>
      <ApplyModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default RoadmapDetailInfo;
