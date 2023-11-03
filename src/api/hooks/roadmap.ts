import qs from 'qs';
import type { ParsedUrlQuery } from 'querystring';
import { useSetRecoilState } from 'recoil';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRoadmapSteps,
  getRoadmapsMy,
  getRoadmaps,
  postRoadmapStepIndividual as postRoadmapStepIndividualAPI,
  postRoadmapIndividual as postRoadmapIndividualAPI,
  getRoadmapStepReference,
  postRoadmaps as postRoadmapsAPI,
  getRoadmapGroupMember,
  getRoadmapGroupApply,
  patchRoadmapGroupMemberRole as patchRoadmapGroupMemberRoleAPI,
  deleteRoadmapGroupMember as deleteRoadmapGroupMemberAPI,
  postRoadmapGroupApplyAccept as postRoadmapGroupApplyAcceptAPI,
  delelteRoadmapGroupApplyReject as delelteRoadmapGroupApplyRejectAPI,
  postRoadmapsGroupsParticipate as postRoadmapsGroupsParticipateAPI,
  getRoadmapsById,
  postRoadmapsApply as postRoadmapsApplyAPI,
  postRoadmapsById as postRoadmapsByIdAPI,
} from '@/api/roadmap';
import type { GetRoadmapStepReferenceRequest, GetRoadmapsResponse, Role } from '@/api/roadmap/type';
import { type RoadmapForm, roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import { useToast } from '@/components/common/Toast/useToast';
import { useApiError } from '@/hooks/useApiError';

export const ROADMAP_QUERY_KEY = {
  all: ['roadmaps'],
  getRoadmapsMy: 'getRoadmapsMy',
  getRoadmaps: () => [...ROADMAP_QUERY_KEY.all, 'list'],
  getRoadmapsById: (roadmapId: number) => [...ROADMAP_QUERY_KEY.all, roadmapId],
  getRoadmapsFiltered: (filters: ParsedUrlQuery) => [...ROADMAP_QUERY_KEY.getRoadmaps(), filters],
  getRoadmapSteps: 'getRoadmapSteps',
  getRoadmapGroupMember: 'getRoadmapGroupMember',
  getRoadmapGroupApply: 'getRoadmapGroupApply',
};

export const useGetRoadmapsMy = () => {
  const { data } = useQuery([ROADMAP_QUERY_KEY.getRoadmapsMy], () => getRoadmapsMy());

  const categoryData = {
    category: data?.result.categories ?? [],
    roadmaps: [...(data?.result.roadmaps.tilys ?? []), ...(data?.result.roadmaps.groups ?? [])],
  };

  return {
    data: categoryData,
  };
};

export const useGetRoadmaps = (query: ParsedUrlQuery) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ROADMAP_QUERY_KEY.getRoadmapsFiltered(query),
    ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...query };
      const data = getRoadmaps(qs.stringify(searchParams, { addQueryPrefix: true }));

      return data;
    },
    {
      getNextPageParam: (lastPage: GetRoadmapsResponse, pages) => {
        if (!lastPage.result.hasNext) {
          return undefined;
        }
        return pages.length;
      },
      keepPreviousData: true,
    },
  );

  return {
    data:
      data?.pages.flatMap((page) => {
        if (page.result === null) {
          return [];
        }
        return page.result?.roadmaps;
      }) ?? [],
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export const useGetRoadmapsMyList = () => {
  const { data, isLoading } = useQuery([ROADMAP_QUERY_KEY.getRoadmapsMy], () => getRoadmapsMy());
  return { roadmaps: data?.result.roadmaps, isLoading: isLoading };
};

export const useGetRoadmapSteps = (roadmapId: number) => {
  const enabled = roadmapId !== 0 && !!roadmapId;

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
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapsMy]);
        toast.showBottom({
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

export const usePostRoadmaps = () => {
  const { mutateAsync, isLoading } = useMutation(postRoadmapsAPI);

  const postRoadmaps = async (body: RoadmapForm) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { postRoadmaps, isLoading };
};

export const usePostRoadmapsById = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { handleError } = useApiError();
  const { mutateAsync, isLoading } = useMutation(postRoadmapsByIdAPI);

  const postRoadmapsById = async ({ roadmapId, body }: { roadmapId: number; body: RoadmapForm }) => {
    const data = await mutateAsync(
      { roadmapId, body },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapsById(roadmapId)]);
          toast.show({
            message: '로드맵이 수정되었습니다.',
          });
        },
        onError: handleError,
      },
    );

    return data;
  };

  return { postRoadmapsById, isLoading };
};

export const useGetRoadmapsById = (roadmapId: number) => {
  const enabled = roadmapId > 0;
  const { data, isLoading } = useQuery(ROADMAP_QUERY_KEY.getRoadmapsById(roadmapId), () => getRoadmapsById(roadmapId), {
    enabled,
  });

  const setRoadmap = useSetRecoilState(roadmapAtoms);

  if (!isLoading && data) {
    setRoadmap(data?.result);
  }

  return { data, isLoading };
};

export const usePostRoadmapsApply = () => {
  const { mutateAsync, isLoading } = useMutation(postRoadmapsApplyAPI);
  const toast = useToast();

  const postRoadmapsApply = async (body: { roadmapId: number; content: string }) => {
    if (body.roadmapId > 0) {
      const data = await mutateAsync(body, {
        onSuccess: () => {
          toast.show({
            message: '신청이 완료되었습니다.',
          });
        },
        onError: () => {
          toast.show({
            message: '신청에 실패하였습니다.',
          });
        },
      });

      return data;
    } else return undefined;
  };

  return { postRoadmapsApply, isLoading };
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
        toast.showBottom({
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
        toast.showBottom({
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

export const usePostRoadmapsGroupsParticipate = () => {
  const { mutateAsync, isLoading, isError } = useMutation(postRoadmapsGroupsParticipateAPI);
  const toast = useToast();

  const postRoadmapsGroupsParticipate = async (code: string) => {
    const data = await mutateAsync(code, {
      onSuccess: () => {
        toast.showBottom({
          message: '로드맵에 참여되었습니다.',
        });
      },
      onError: () => {
        toast.showBottom({
          message: '로드맵을 찾을 수 없습니다. 코드를 확인해주세요.',
        });
      },
    });

    return data;
  };

  return { postRoadmapsGroupsParticipate, isLoading, isError };
};
