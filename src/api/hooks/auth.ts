import { useMutation } from '@tanstack/react-query';
import type { ChangePasswordFormInput } from '@/components/auth/change-password';
import type { LoginFormInput } from '@/components/auth/login';
import type { RegisterFormInput } from '@/components/auth/register';
import type { EmailFormInput } from '@/components/auth/verify/ByEmail';
import { useApiError } from '@/hooks/useApiError';
import {
  postPasswordChange as postPasswordChangeAPI,
  postEmailCheck as postEmailCheckAPI,
  postEmailCode as postEmailCodeAPI,
  postEmailCodeCheck as postEmailCodeCheckAPI,
  postJoin as postJoinAPI,
  postLogin as postLoginAPI,
} from '../auth';

export const usePostEmailCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCheckAPI);

  const postEmailCheck = async (email: string) => {
    const data = await mutateAsync({ email: email });

    return data;
  };

  return { postEmailCheck, isLoading };
};

export const usePostEmailCode = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCodeAPI);

  const postEmailCode = async (email: string) => {
    const data = await mutateAsync({ email: email });

    return data;
  };

  return { postEmailCode, isLoading };
};

export const usePostEmailCodeCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCodeCheckAPI);

  const postEmailCodeCheck = async (body: EmailFormInput) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { postEmailCodeCheck, isLoading };
};

export const usePostJoin = () => {
  const { mutateAsync, isLoading } = useMutation(postJoinAPI);

  const postJoin = async (body: RegisterFormInput) => {
    const data = await mutateAsync(body);

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

  const postPasswordChange = async (body: ChangePasswordFormInput) => {
    const data = await mutateAsync(body);

    return data;
  };

  return { postPasswordChange, isLoading };
};
