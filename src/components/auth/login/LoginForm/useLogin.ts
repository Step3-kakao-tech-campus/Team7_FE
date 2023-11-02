import { useSetRecoilState } from 'recoil';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { LoginRequest } from '@/api/auth/type';
import { usePostLogin } from '@/api/hooks/auth';
import { accessTokenAtom } from '@/components/auth/states/accessTokenAtoms';
import TILY_LINKS from '@/constants/links';

const useLogin = () => {
  const { postLoginAsync, isLoading } = usePostLogin();

  const setAccessToken = useSetRecoilState(accessTokenAtom);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (formData) => {
    const data = await postLoginAsync(formData);

    if (data?.code === 200 && data?.result?.accessToken) {
      setAccessToken(data?.result?.accessToken);
      router.replace(TILY_LINKS.home());
    }
  };

  return { isLoading, control, handleSubmit, errors, onSubmit };
};

export default useLogin;
