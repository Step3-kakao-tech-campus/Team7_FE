import { Controller } from 'react-hook-form';
import TextButton from '@/components/auth/common/TextButton';
import * as Styled from '@/components/auth/verify/ByEmail/style';
import useByEamil from '@/components/auth/verify/ByEmail/useByEmail';
import CodeCheck from '@/components/auth/verify/CodeCheck';
import DuplicateEmailModal from '@/components/auth/verify/DuplicateEmailModal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import REGEX from '@/constants/regex';

interface ByEmailProps {
  location: 'register' | 'password';
}

const ByEmail = ({ location }: ByEmailProps) => {
  const {
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
  } = useByEamil(location);
  return (
    <>
      <Styled.EmailForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요.',
            pattern: {
              value: REGEX.email(),
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

      <DuplicateEmailModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default ByEmail;
