import { useMutation } from '@tanstack/react-query';
import type { ChangePasswordFormInput } from '@/components/auth/change-password';
import type { LoginFormInput } from '@/components/auth/login';
import type { RegisterFormInput } from '@/components/auth/register/RegisterForm';
import { useApiError } from '@/hooks/useApiError';
import {
  postPasswordChange as postPasswordChangeAPI,
  postEmailCheck,
  postEmailCode,
  postEmailCodeCheck,
  postJoin as postJoinAPI,
  postLogin as postLoginAPI,
} from '../auth';
import type { EmailCodeCheckRequest } from '../auth/type';

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
  const { mutateAsync, isLoading } = useMutation(postJoinAPI);
  const { handleError } = useApiError();

  const postJoin = async (body: RegisterFormInput) => {
    const data = await mutateAsync(body, {
      onError: handleError,
    });

    return data;
  };

  return { postJoin, isLoading };
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
