import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { PostEmailPasswordRequest } from '@/api/auth/type';
import { usePostPasswordChange } from '@/api/hooks/auth';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';

const usePassword = () => {
  const email = useQueryParam('email');
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { postPasswordChangeAsync, isLoading } = usePostPasswordChange();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PostEmailPasswordRequest> = async (formData) => {
    const data = await postPasswordChangeAsync({ body: formData });
    if (data?.code === 200) {
      handleOpen();
    }
  };

  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  return { isOpen, handleClose, handleOpen, isLoading, control, handleSubmit, getValues, errors, onSubmit };
};

export default usePassword;
