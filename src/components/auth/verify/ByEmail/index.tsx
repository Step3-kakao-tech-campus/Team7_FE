import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { usePostEmailCheck, usePostEmailCode } from '@/api/hooks/auth';
import * as Styled from '@/components/auth/verify/ByEmail/style';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { EMAIL_REGEX } from '@/constants/regex';
import { useModalState } from '@/hooks/useModalState';
import { TextButton } from '../../TextButton';
import CodeCheck from '../CodeCheck';
import VerifyModal from '../VerifyModal';

interface ByEmailProps {
  location: 'register' | 'password';
}

const ByEmail = ({ location }: ByEmailProps) => {
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const { isOpen, handleOpen, handleClose } = useModalState();

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
              status={errors.email && 'error'}
              disabled={isEmail}
              {...field}
              onBlur={() => {
                scrollTo(0, 0);
              }}
            />
          )}
        />
        {isEmail && (
          <TextButton type="button" variant="ghost" onClick={resend}>
            재전송하기
          </TextButton>
        )}

        {!isEmail && (
          <Button fullWidth isLoading={registerLoading || passwordLoading}>
            이메일 확인
          </Button>
        )}
      </Styled.EmailForm>
      {isEmail && <CodeCheck location={location} email={getValues('email')} />}

      <VerifyModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default ByEmail;
