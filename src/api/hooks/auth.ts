import { useMutation } from '@tanstack/react-query';
import type { ChangePasswordFormInput } from '@/components/auth/change-password';
import type { LoginFormInput } from '@/components/auth/login';
import { useApiError } from '@/hooks/useApiError';
import {
  postPasswordChange as postPasswordChangeAPI,
  postEmailCheck,
  postEmailCode,
  postEmailCodeCheck,
  postJoin,
  postLogin as postLoginAPI,
} from '../auth';
import type { EmailCodeCheckRequest, JoinRequest } from '../auth/type';

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

export const usePostLogin = () => {
  const { mutateAsync, isLoading } = useMutation(postLoginAPI);
  const { handleError } = useApiError();

  const postLogin = async (body: LoginFormInput) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postLogin, isLoading };
};

export const usePostPasswordChange = () => {
  const { mutateAsync, isLoading } = useMutation(postPasswordChangeAPI);
  const { handleError } = useApiError();

  const postPasswordChange = async (body: ChangePasswordFormInput) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postPasswordChange, isLoading };
};
