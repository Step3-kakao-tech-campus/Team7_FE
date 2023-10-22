import { useQueryClient } from '@tanstack/react-query';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRoadmapSteps,
  getRoadmaps,
  postRoadmapStepIndividual as postRoadmapStepIndividualAPI,
  postRoadmapIndividual as postRoadmapIndividualAPI,
  getRoadmapStepReference,
  getRoadmapGroupMember,
  getRoadmapGroupApply,
  patchRoadmapGroupMemberRole as patchRoadmapGroupMemberRoleAPI,
  deleteRoadmapGroupMember as deleteRoadmapGroupMemberAPI,
  postRoadmapGroupApplyAccept as postRoadmapGroupApplyAcceptAPI,
  delelteRoadmapGroupApplyReject as delelteRoadmapGroupApplyRejectAPI,
} from '@/api/roadmap';
import type { GetRoadmapStepReferenceRequest, Role } from '@/api/roadmap/type';
import { useToast } from '@/components/common/Toast/useToast';
import { useApiError } from '@/hooks/useApiError';

export const ROADMAP_QUERY_KEY = {
  getRoadmaps: 'getRoadmaps',
  getRoadmapSteps: 'getRoadmapSteps',
  getRoadmapGroupMember: 'getRoadmapGroupMember',
  getRoadmapGroupApply: 'getRoadmapGroupApply',
};

export const useGetRoadmaps = () => {
  const { data } = useQuery([ROADMAP_QUERY_KEY.getRoadmaps], () => getRoadmaps());

  const categoryData = {
    category: data?.result.categories ?? [],
    roadmaps: [...(data?.result.roadmaps.tily ?? []), ...(data?.result.roadmaps.group ?? [])],
  };

  return {
    data: categoryData,
  };
};

export const useGetRoadmapSteps = (roadmapId: number) => {
  const enabled = roadmapId !== 0;

  const { data, isLoading } = useQuery(
    [ROADMAP_QUERY_KEY.getRoadmapSteps, roadmapId],
    () => getRoadmapSteps(roadmapId),
    {
      enabled,
    },
  );

  return {
    steps: data,
    isLoading,
  };
};

export const useGetRoadmapStepReference = (body: GetRoadmapStepReferenceRequest) => {
  const enabled = !!body.roadmapId && !!body.roadmapId;

  const { data, isLoading } = useQuery([ROADMAP_QUERY_KEY.getRoadmapSteps, body], () => getRoadmapStepReference(body), {
    enabled,
  });

  return {
    reference: data?.result,
    isLoading,
  };
};

export const usePostRoadmapIndividual = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const mutation = useMutation(postRoadmapIndividualAPI);
  const { handleError } = useApiError();

  const postRoadmapsIndividual = async (title: string) => {
    const data = await mutation.mutateAsync(title, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmaps]);
        toast.show({
          message: '로드맵이 생성되었습니다.',
        });
      },
      onError: handleError,
    });

    return data;
  };
  // useMutation 훅을 밖으로 내보내지 않아도, 비즈니스 로직 함수 작성해서 내보내면 된다.
  return { postRoadmapsIndividual };
};

export const usePostRoadmapStepIndividual = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapStepIndividualAPI);

  const postRoadmapStepIndividual = async (body: { roadmapId: number; title: string }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapSteps, body.roadmapId]);
      },
    });

    return data;
  };
  return { postRoadmapStepIndividual };
};

export const useGetRoadmapGroupMember = (roadmapId: number) => {
  const { data } = useQuery([ROADMAP_QUERY_KEY.getRoadmapGroupMember, roadmapId], () =>
    getRoadmapGroupMember(roadmapId),
  );

  const roleWeight = {
    master: 3,
    manager: 2,
    member: 1,
  };

  const members = data?.result.users.sort((a, b) => roleWeight[b.role] - roleWeight[a.role]) ?? [];

  return {
    members: members,
    myRole: data?.result.myRole,
  };
};

export const usePatchRoadmapGroupMemberRole = () => {
  const toast = useToast();
  const mutation = useMutation(patchRoadmapGroupMemberRoleAPI);

  const patchRoadmapGroupMemberRole = async (body: {
    roadmapId: number;
    userId: number;
    role: Exclude<Role, null>;
  }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        toast.show({
          message: '멤버 권한이 변경되었습니다.',
        });
      },
    });

    return data;
  };
  return { patchRoadmapGroupMemberRole };
};

export const useDeleteRoadmapGroupMember = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const mutation = useMutation(deleteRoadmapGroupMemberAPI);

  const deleteRoadmapGroupMember = async (body: { roadmapId: number; userId: number }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapGroupMember, body.roadmapId]);
        toast.show({
          message: '멤버가 강퇴되었습니다.',
        });
      },
    });

    return data;
  };
  return { deleteRoadmapGroupMember };
};

export const useGetRoadmapGroupApply = (roadmapId: number) => {
  const { data } = useQuery([ROADMAP_QUERY_KEY.getRoadmapGroupApply, roadmapId], () => getRoadmapGroupApply(roadmapId));

  return {
    members: data?.result.users ?? [],
  };
};

export const usePostRoadmapGroupApplyAccept = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postRoadmapGroupApplyAcceptAPI);

  const postRoadmapGroupApplyAccept = async (body: { roadmapId: number; userId: number }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapGroupApply, body.roadmapId]);
      },
    });

    return data;
  };
  return { postRoadmapGroupApplyAccept };
};

export const useDelelteRoadmapGroupApplyReject = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(delelteRoadmapGroupApplyRejectAPI);

  const delelteRoadmapGroupApplyReject = async (body: { roadmapId: number; userId: number }) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapGroupApply, body.roadmapId]);
      },
    });

    return data;
  };
  return { delelteRoadmapGroupApplyReject };
};
