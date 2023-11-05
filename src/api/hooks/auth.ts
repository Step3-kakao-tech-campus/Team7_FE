import { useMutation } from '@tanstack/react-query';
import {
  postPasswordChange,
  postEmailCheck,
  postEmailCode,
  postEmailCodeCheck,
  postJoin,
  postLogin,
  getKakaoLogin,
} from '@/api/auth';
import type { EmailCodeCheckRequest, JoinRequest, EmailPasswordRequest, KakaoLoginRequest } from '@/api/auth/type';
import { useApiError } from '@/hooks/useApiError';
import { setCookie } from '@/utils/cookie';

export const usePostLogin = () => {
  const { mutateAsync, isLoading } = useMutation(postLogin);
  const { handleError } = useApiError();

  const postLoginAsync = async (body: EmailPasswordRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    setCookie('accessToken', data.result?.accessToken as string, { path: '/' });

    return data;
  };

  return { postLoginAsync, isLoading };
};

export const usePostEmailCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCheck);

  const postEmailCheckAsync = async (body: { email: string }) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { postEmailCheckAsync, isLoading };
};

export const usePostEmailCode = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCode);

  const { handleError } = useApiError();

  const postEmailCodeAsync = async (body: { email: string }) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postEmailCodeAsync, isLoading };
};

export const usePostEmailCodeCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCodeCheck);
  const { handleError } = useApiError();

  const postEmailCodeCheckAsync = async (body: EmailCodeCheckRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postEmailCodeCheckAsync, isLoading };
};

export const usePostJoin = () => {
  const { mutateAsync, isLoading } = useMutation(postJoin);
  const { handleError } = useApiError();

  const postJoinAsync = async (body: JoinRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postJoinAsync, isLoading };
};

export const usePostPasswordChange = () => {
  const { mutateAsync, isLoading } = useMutation(postPasswordChange);
  const { handleError } = useApiError();

  const postPasswordChangeAsync = async (body: EmailPasswordRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postPasswordChangeAsync, isLoading };
};

export const useGetKakaoLogin = () => {
  const { mutateAsync, isLoading } = useMutation(getKakaoLogin);
  const { handleError } = useApiError();

  const getKakaoLoginAsync = async (body: KakaoLoginRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    setCookie('accessToken', data.result?.accessToken as string, { path: '/' });

    return data;
  };

  return { getKakaoLoginAsync, isLoading };
};
