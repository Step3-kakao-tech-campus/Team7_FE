import qs from 'qs';
import { useRouter } from 'next/router';
import type { QueryKey } from '@tanstack/react-query';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ROADMAP_QUERY_KEY } from '@/api/hooks/roadmap';
import {
  getTils,
  getTilsQuery,
  postTils,
  postComments,
  patchComment as patchCommentAPI,
  deleteComment as deleteCommentAPI,
  patchTils,
  submitTils,
  getStepTils,
} from '@/api/til';
import type {
  DeleteCommentRequest,
  PatchCommentRequest,
  PostCommentsRequest,
  PostTilsRequest,
  GetTilsQueryResponse,
  PatchTilsRequest,
  SubmitTilsRequest,
} from '@/api/til/type';
import type { IdParams } from '@/api/type';
import { useToast } from '@/components/common/Toast/useToast';
import { useApiError } from '@/hooks/useApiError';

const QUERY_KEY = {
  getTilsQuery: 'getTilsQuery',
  getTils: 'getTils',
  getStepTils: 'getStepTils',
};

interface InfinityTilRequest {
  queryKey?: QueryKey;
}

// 틸 생성하기

export const usePostTils = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(postTils);
  const { handleError } = useApiError();

  const postTilsAsync = async (req: { body: PostTilsRequest }) => {
    const { roadmapId } = req.body;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapSteps, roadmapId?.toString()]);
      },
      onError: handleError,
    });

    return data;
  };

  return { postTilsAsync };
};

// 틸 조회하기

export const useGetTils = (req: { tilId: number }) => {
  const { tilId } = req;

  const { isReady } = useRouter();

  const { data, isLoading } = useQuery([QUERY_KEY.getTils, tilId], () => getTils(req), {
    enabled: isReady,
  });

  return {
    tilDetail: data?.result ?? null,
    isLoading,
  };
};

// 틸 저장하기

export const usePatchTils = () => {
  const { mutateAsync } = useMutation(patchTils);
  const { handleError } = useApiError();

  const patchTilsAsync = async (req: { tilId: number; body: PatchTilsRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };
  return { patchTilsAsync };
};

// 틸 제출하기

export const useSubmitTils = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(submitTils);
  const { handleError } = useApiError();
  const toast = useToast();

  const submitTilsAsync = async (req: { param: IdParams; body: SubmitTilsRequest }) => {
    const {
      param: { roadmapId, tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: 'TIL이 제출 되었습니다.' });
        queryClient.invalidateQueries([ROADMAP_QUERY_KEY.getRoadmapSteps, roadmapId]);
        queryClient.invalidateQueries([QUERY_KEY.getTils, tilId]);
      },
      onError: handleError,
    });

    return data;
  };
  return { submitTilsAsync };
};

export const useGetTilsQuery = ({ queryKey }: InfinityTilRequest) => {
  const { query } = useRouter();
  const _queryKey = (typeof queryKey === 'string' ? [queryKey] : queryKey) ?? []; // _queryKey를 배열로 만든다 또한 _queryKey가 undefined일 경우 []로 초기화

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [QUERY_KEY.getTilsQuery, ..._queryKey],
    async ({ pageParam: page = 0 }) => {
      const searchParams = { page, ...query };

      const data = getTilsQuery({ query: qs.stringify(searchParams, { addQueryPrefix: true }) });

      return data;
    },
    {
      getNextPageParam: (lastPage: GetTilsQueryResponse, pages) => {
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

export const usePostComments = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(postComments);
  const { handleError } = useApiError();
  const toast = useToast();

  const postCommentsAsync = async (req: { body: PostCommentsRequest }) => {
    const {
      body: { tilId },
    } = req;

    const data = await mutateAsync(req, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 작성되었습니다.' });
        queryClient.invalidateQueries([QUERY_KEY.getTils, tilId]);
      },
      onError: handleError,
    });

    return data;
  };

  return { postCommentsAsync };
};

export const usePatchComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(patchCommentAPI);
  const { handleError } = useApiError();
  const toast = useToast();

  const patchComment = async (body: PatchCommentRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 수정 되었습니다.' });
        queryClient.invalidateQueries([QUERY_KEY.getTils, body.tilId]);
      },
      onError: handleError,
    });

    return data;
  };

  return { patchComment };
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteCommentAPI);
  const { handleError } = useApiError();
  const toast = useToast();

  const deleteComment = async (body: DeleteCommentRequest) => {
    const data = await mutation.mutateAsync(body, {
      onSuccess: () => {
        toast.showBottom({ message: '댓글이 삭제 되었습니다.' });
        queryClient.invalidateQueries([QUERY_KEY.getTils, body.tilId]);
      },
      onError: handleError,
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

  const enabled = !!stepId;

  const { data, isLoading } = useQuery(
    [QUERY_KEY.getStepTils, ..._queryKey],
    () =>
      getStepTils({
        roadmapId: Number(roadmapId),
        stepId: Number(stepId),
        input: qs.stringify({ isSubmit, isMember, name }, { addQueryPrefix: true }),
      }),
    {
      enabled,
    },
  );

  return {
    memberTils: data?.result.members,
    isLoading,
  };
};
