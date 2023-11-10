import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { usePostEmailCheck, usePostEmailCode } from '@/api/hooks/auth';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';

const useByEamil = (location: 'register' | 'password') => {
  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();

  const [isEmail, setIsEmail] = useState<boolean>(false);

  const { postEmailCheckAsync, isLoading: registerLoading } = usePostEmailCheck();
  const { postEmailCodeAsync, isLoading: passwordLoading } = usePostEmailCode();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ email: string }> = async (formData) => {
    const email = formData.email;

    const data =
      location === 'register'
        ? await postEmailCheckAsync({ body: { email } })
        : await postEmailCodeAsync({ body: { email } });

    if (data?.code === 200) {
      // setIsEmail(true);
      if (location === 'register') {
        router.push({
          pathname: TILY_LINKS.register(),
          query: {
            email: email,
          },
        });
      } else {
        router.push({
          pathname: TILY_LINKS.changePassword(),
          query: {
            email: email,
          },
        });
      }
    } else {
      if (location === 'register') {
        handleOpen();
      }
    }
  };

  const resend = async () => {
    const email = getValues('email');
    location === 'register'
      ? await postEmailCheckAsync({ body: { email } })
      : await postEmailCodeAsync({ body: { email } });
  };

  return {
    isOpen,
    handleClose,
    isEmail,
    registerLoading,
    passwordLoading,
    control,
    handleSubmit,
    getValues,
    errors,
    onSubmit,
    resend,
  };
};

export default useByEamil;
