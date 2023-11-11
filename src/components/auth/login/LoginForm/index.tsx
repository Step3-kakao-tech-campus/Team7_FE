import { Controller } from 'react-hook-form';
import AuthForm from '@/components/auth/common/AuthForm';
import AuthLogo from '@/components/auth/common/AuthLogo';
import useLogin from '@/components/auth/login/LoginForm/useLogin';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';

const LoginForm = () => {
  const { isLoading, control, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <Flex dir="col" align="center" gap={2} fullWidth>
      <AuthLogo />
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요.',
          }}
          render={({ field }) => (
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              message={errors.email?.message}
              {...field}
              onBlur={() => {
                scrollTo(0, 0);
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: '비밀번호를 입력해주세요.',
          }}
          render={({ field }) => (
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              message={errors.password?.message}
              {...field}
              onBlur={() => {
                scrollTo(0, 0);
              }}
            />
          )}
        />
        <Button type="submit" isLoading={isLoading} fullWidth>
          로그인
        </Button>
      </AuthForm>
    </Flex>
  );
};

export default LoginForm;
