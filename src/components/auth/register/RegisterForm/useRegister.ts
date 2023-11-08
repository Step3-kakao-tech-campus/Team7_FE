import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type JoinRequest } from '@/api/auth/type';
import { usePostJoin } from '@/api/hooks/auth';
import { useModalState } from '@/hooks/useModalState';
import useQueryParam from '@/hooks/useQueryParam';

const useRegister = () => {
  const email = useQueryParam('email');
  const { isOpen, handleOpen, handleClose } = useModalState();

  const { postJoinAsync, isLoading } = usePostJoin();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<JoinRequest> = async (formData) => {
    const data = await postJoinAsync({ body: formData });

    if (data?.code === 200) {
      handleOpen();
    }
  };

  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  return { isOpen, handleClose, isLoading, control, handleSubmit, getValues, errors, onSubmit };
};

export default useRegister;
