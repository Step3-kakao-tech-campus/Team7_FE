import qs from 'qs';
import { useRouter } from 'next/router';
import type { QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ROADMAP_QUERY_KEY } from '@/api/hooks/roadmap';
import {
  getTil,
  getTils,
  postTil as postTilAPI,
  postComment as postCommentAPI,
  patchComment as patchCommentAPI,
  deleteComment as deleteCommentAPI,
  patchTil as patchTilAPI,
  submitTil as submitTilAPI,
  getStepTils,
} from '@/api/til';
import type {
  DeleteCommentRequest,
  GetTilRequest,
  PatchCommentRequest,
  PostCommentRequest,
  PostTilRequest,
  GetTilsResponse,
  PatchTilRequest,
  SubmitTilRequest,
} from '@/api/til/type';

const QUERY_KEY = {
  getTils: 'getTils',
  getTil: 'getTil',
  getStepTils: 'getStepTils',
};

interface InfinityTilRequest {
  queryKey?: QueryKey;
}

export const useGetTilsParam = ({ queryKey }: InfinityTilRequest) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [QUERY_KEY.getTils, ..._queryKey],
    async ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...query };

      const data = getTils(qs.stringify(searchParams, { addQueryPrefix: true }));

      return data;
    },
    {
      getNextPageParam: (lastPage: GetTilsResponse, pages) => {
        if (!lastPage.hasNext) {
          return undefined;
        }

        return pages.length + 1;
      },
      keepPreviousData: true, // 이전 데이터 유지 layout shift 방지
    },
  );

  return {
    // return type에 undefined 제거 하기위해 null 병합 연산자 추가
    tils:
      data?.pages.flatMap((page) => {
        if (page.result === null) {
          // 마지막 페이지인 경우
          return [];
        }
        return page.result?.tils;
      }) ?? [],
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export const useGetTil = (body: GetTilRequest) => {
  const { isReady } = useRouter();

  const { data, isLoading } = useQuery([QUERY_KEY.getTil, body], () => getTil(body), {
    enabled: isReady,
  });

  return {
    tilDetail: data?.result ?? null,
    isLoading,
  };
};

export const usePostTil = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postTilAPI);

  const postTil = async (body: PostTilRequest) => {
    const { roadmapId } = body;

    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapSteps, roadmapId.toString()]);
      },
    });

    return data;
  };

  return { postTil };
};

export const usePatchTil = () => {
  const mutation = useMutation(patchTilAPI);

  const patchTil = async (body: PatchTilRequest) => {
    const data = await mutation.mutateAsync(body);

    return data;
  };
  return { patchTil };
};

export const useSubmitTil = () => {
  const mutation = useMutation(submitTilAPI);

  const submitTil = async (body: SubmitTilRequest) => {
    const data = await mutation.mutateAsync(body);

    return data;
  };
  return { submitTil };
};

export const usePostComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postCommentAPI);

  const postComment = async (body: PostCommentRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.getTil,
          {
            roadmapId: body.roadmapId,
            stepId: body.stepId,
            tilId: body.tilId,
          },
        ]);
      },
    });

    return data;
  };

  return { postComment };
};

export const usePatchComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(patchCommentAPI);

  const patchComment = async (body: PatchCommentRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.getTil,
          {
            roadmapId: body.roadmapId,
            stepId: body.stepId,
            tilId: body.tilId,
          },
        ]);
      },
    });

    return data;
  };

  return { patchComment };
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteCommentAPI);

  const deleteComment = async (body: DeleteCommentRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.getTil,
          {
            roadmapId: body.roadmapId,
            stepId: body.stepId,
            tilId: body.tilId,
          },
        ]);
      },
    });

    return data;
  };

  return { deleteComment };
};

interface useGetStepTilsRequest {
  roadmapId: number;
  stepId: number;
  isSubmit?: boolean;
  isMember?: boolean;
  name?: string;
}

export const useGetStepTils = (body: useGetStepTilsRequest) => {
  const { roadmapId, stepId, isSubmit, isMember, name } = body;

  const { data, isLoading } = useQuery([QUERY_KEY.getStepTils, body], () =>
    getStepTils({
      roadmapId,
      stepId,
      input: qs.stringify({ isSubmit, isMember, name }, { addQueryPrefix: true }),
    }),
  );

  return {
    memberTils: data?.result.members,
    isLoading,
  };
};

export const useGetStepTilsManage = ({ queryKey }: { queryKey: QueryKey }) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { roadmapId, stepId, isSubmit, isMember, name } = query;

  const { data, isLoading } = useQuery([QUERY_KEY.getStepTils, ..._queryKey], () =>
    getStepTils({
      roadmapId: Number(roadmapId),
      stepId: Number(stepId),
      input: qs.stringify({ isSubmit, isMember, name }, { addQueryPrefix: true }),
    }),
  );

  return {
    memberTils: data?.result.members ?? [],
    isLoading,
  };
};
