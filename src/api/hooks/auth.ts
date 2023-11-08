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

// 로그인

export const usePostLogin = () => {
  const { mutateAsync, isLoading } = useMutation(postLogin);
  const { handleError } = useApiError();

  const postLoginAsync = async (req: { body: EmailPasswordRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    setCookie('accessToken', data.result?.accessToken as string, { path: '/' });

    return data;
  };

  return { postLoginAsync, isLoading };
};

// 이메일 중복 확인

export const usePostEmailCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCheck);

  const postEmailCheckAsync = async (req: { body: { email: string } }) => {
    const data = await mutateAsync(req);

    return data;
  };

  return { postEmailCheckAsync, isLoading };
};

// 인증 코드 발송

export const usePostEmailCode = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCode);

  const { handleError } = useApiError();

  const postEmailCodeAsync = async (req: { body: { email: string } }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };

  return { postEmailCodeAsync, isLoading };
};

// 인증 코드 검증

export const usePostEmailCodeCheck = () => {
  const { mutateAsync, isLoading } = useMutation(postEmailCodeCheck);
  const { handleError } = useApiError();

  const postEmailCodeCheckAsync = async (req: { body: EmailCodeCheckRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };

  return { postEmailCodeCheckAsync, isLoading };
};

// 회원 가입

export const usePostJoin = () => {
  const { mutateAsync, isLoading } = useMutation(postJoin);
  const { handleError } = useApiError();

  const postJoinAsync = async (req: { body: JoinRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };

  return { postJoinAsync, isLoading };
};

// 유저 비밀번호 변경

export const usePostPasswordChange = () => {
  const { mutateAsync, isLoading } = useMutation(postPasswordChange);
  const { handleError } = useApiError();

  const postPasswordChangeAsync = async (req: { body: EmailPasswordRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    return data;
  };

  return { postPasswordChangeAsync, isLoading };
};

// 카카오 로그인

export const useGetKakaoLogin = () => {
  const { mutateAsync, isLoading } = useMutation(getKakaoLogin);
  const { handleError } = useApiError();

  const getKakaoLoginAsync = async (req: { body: KakaoLoginRequest }) => {
    const data = await mutateAsync(req, {
      onError: handleError,
    });

    setCookie('accessToken', data.result?.accessToken as string, { path: '/' });

    return data;
  };

  return { getKakaoLoginAsync, isLoading };
};
