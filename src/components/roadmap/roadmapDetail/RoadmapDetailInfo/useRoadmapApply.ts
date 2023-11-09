import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePostTilyApply } from '@/api/hooks/roadmap';
import { postTils } from '@/api/til';
import { useToast } from '@/components/common/Toast/useToast';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';

const useRoadmapApply = () => {
  const router = useRouter();
  const roadmapId = Number(useQueryParam('roadmapId'));
  const toast = useToast();

  const { isOpen, handleOpen, handleClose } = useModalState();

  const { data } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });
  const { postTilyApplyAsync, isLoading } = usePostTilyApply();

  const myRole = data?.result.myRole;
  const category = data?.result.category;

  const handleApply = async () => {
    if (category === 'group') handleOpen();
    else {
      const data = await postTilyApplyAsync({ roadmapId: roadmapId });
      if (data?.code === 200) {
        routeTILWrite();
      }
    }
  };

  const routeTILWrite = async () => {
    const NOT_TIL_CREATED_FOR_STEP = null;

    if (!data?.result.steps.length) {
      toast.showBottom({ message: '생성된 STEP이 없습니다.' });
    } else {
      const recentTilId = data?.result.recentTilId;
      const recentStepId = data?.result.recentStepId;
      if (recentTilId === NOT_TIL_CREATED_FOR_STEP) {
        const step = data?.result.steps[0];
        const tilData = await postTils({
          body: { roadmapId: roadmapId, stepId: step.id, title: step.title },
        });
        router.push(TILY_LINKS.tilWrite({ roadmapId: roadmapId, stepId: step.id, tilId: tilData?.result.id }));
      } else if (recentStepId !== NOT_TIL_CREATED_FOR_STEP) {
        router.push(
          TILY_LINKS.tilWrite({
            roadmapId: roadmapId,
            stepId: Number(recentStepId),
            tilId: Number(recentTilId),
          }),
        );
      }
    }
  };

  return { data, category, roadmapId, myRole, isLoading, handleApply, routeTILWrite, router, isOpen, handleClose };
};

export default useRoadmapApply;
