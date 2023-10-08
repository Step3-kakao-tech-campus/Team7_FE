import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { postLogin } from '@/api/auth';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';

interface LoginFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: (data: LoginFormInput) => postLogin(data) });

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

  const onSubmit: SubmitHandler<LoginFormInput> = async (formData) => {
    const data = await mutateAsync(formData);

    if (data?.code === 200) {
      router.replace(tilyLinks.home());
    } else {
      // 에러 처리
    }
  };
  return (
    <StyledFlex dir="col" align="center">
      <Logo />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요.',
          }}
          render={({ field }) => (
            <Input label="이메일" placeholder="이메일을 입력해주세요." message={errors.email?.message} {...field} />
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
            />
          )}
        />
        <Button type="submit" isLoading={isLoading} fullWidth>
          완료
        </Button>
      </StyledForm>
    </StyledFlex>
  );
};

export default Login;

const StyledFlex = styled(Flex)`
  gap: 3rem;
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;

  & > label {
    margin-bottom: 0.8rem;
  }
`;
