import { useMutation } from '@tanstack/react-query';
import { postPasswordChange, postEmailCheck, postEmailCode, postEmailCodeCheck, postJoin, postLogin } from '@/api/auth';
import type { EmailCodeCheckRequest, JoinRequest, EmailPasswordRequest } from '@/api/auth/type';
import { useApiError } from '@/hooks/useApiError';
import { setCookie } from '@/utils/cookie';
import {
  postPasswordChange as postPasswordChangeAPI,
  postEmailCheck as postEmailCheckAPI,
  postEmailCode as postEmailCodeAPI,
  postEmailCodeCheck as postEmailCodeCheckAPI,
  postJoin as postJoinAPI,
  postLogin as postLoginAPI,
} from '../auth';

export const usePostLogin = () => {
  const { mutateAsync, isLoading } = useMutation(postLogin);
  const { handleError } = useApiError();

  const postLoginAsync = async (body: EmailPasswordRequest) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

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

    setCookie('accessToken', data.result?.accessToken as string, { path: '/' });

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
