import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { usePostEmailCheck, usePostEmailCode } from '@/api/hooks/auth';
import { useModalState } from '@/hooks/useModalState';

const useByEamil = (location: 'register' | 'password') => {
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

    const data = location === 'register' ? await postEmailCheckAsync({ email }) : await postEmailCodeAsync({ email });

    if (data?.code === 200) {
      setIsEmail(true);
    } else {
      if (location === 'register') {
        handleOpen();
      }
    }
  };

  const resend = async () => {
    const email = getValues('email');
    location === 'register' ? await postEmailCheckAsync({ email }) : await postEmailCodeAsync({ email });
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
