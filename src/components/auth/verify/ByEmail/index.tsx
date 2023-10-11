import { useEffect, useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { postEmailCheck, postEmailCodeCheck } from '@/api/auth';
import * as Styled from '@/components/auth/verify/ByEmail/style';
import Input from '@/components/common/Input';
import { tilyLinks } from '@/constants/links';
import { EMAIL_REGEX } from '@/constants/regex';
import { useModalState } from '@/hooks/common/useModalState';
import CodeCheck from '../CodeCheck';
import VerifyModal from '../VerifyModal';

interface EmailFormStates {
  state: 'emailReady' | 'codeReady' | 'valid';
  email: string;
}

export interface EmailFormInput {
  email: string;
  code: string;
}

const ByEmail = () => {
  const { mutateAsync: emailMutateAsync, isLoading: emailIsLoading } = useMutation({
    mutationFn: (email: string) => postEmailCheck({ email: email }),
  });
  const { mutateAsync: codeMutateAsync, isLoading: codeIsLoading } = useMutation({
    mutationFn: (data: EmailFormInput) => postEmailCodeCheck(data),
  });

  const [email, setEmail] = useState<EmailFormStates>({ state: 'emailReady', email: '' });
  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      code: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    console.log(email.state);
  }, [email]);

  const onSubmit: SubmitHandler<EmailFormInput> = async (formData) => {
    console.log('here');
    if (email.state === 'emailReady' && !formData.code) {
      const email = formData.email;
      const data = await emailMutateAsync(email);

      if (data?.code === 200) {
        setEmail({ state: 'codeReady', email: email });
      } else {
        handleOpen();
      }
    } else if (email.state === 'codeReady') {
      const email = formData.email;
      const verifyCode = formData.code;
      const data = await codeMutateAsync({ email: email, code: verifyCode });

      if (data?.code === 200) {
        router.push({
          pathname: tilyLinks.register(),
          query: {
            email: email,
          },
        });
      } else {
        setError('code', { type: '400', message: data.message });
      }
    }
  };

  return (
    <>
      <Styled.EmailForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요.',
            pattern: {
              value: EMAIL_REGEX,
              message: '이메일의 형식을 확인해주세요.',
            },
          }}
          render={({ field }) => (
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              message={errors.email?.message}
              status={errors.email ? 'error' : 'default'}
              disabled={email.state === 'codeReady'}
              {...field}
            />
          )}
        />
        {email.state === 'codeReady' && (
          <CodeCheck emailMutateAsync={emailMutateAsync} email={email.email} control={control} errors={errors} />
        )}

        <Styled.VerifyButton fullWidth isLoading={emailIsLoading || codeIsLoading}>
          {email.state !== 'codeReady' ? '이메일 확인' : '인증하기'}
        </Styled.VerifyButton>
      </Styled.EmailForm>
      <VerifyModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default ByEmail;
