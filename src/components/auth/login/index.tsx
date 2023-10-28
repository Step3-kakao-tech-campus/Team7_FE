import { useSetRecoilState } from 'recoil';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { usePostLogin } from '@/api/hooks/auth';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import { tilyLinks } from '@/constants/links';
import type { EmotionTheme } from '@/styles/emotion';
import { accessTokenAtom } from '../states/accessTokenAtoms';

export interface LoginFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { postLogin, isLoading } = usePostLogin();

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

  const onSubmit: SubmitHandler<LoginFormInput> = async (formData) => {
    const data = await postLogin(formData);

    if (data?.code === 200 && data?.result?.accessToken) {
      setAccessToken(data?.result?.accessToken);
      router.replace(tilyLinks.home());
    } else {
      // 에러 처리
    }
  };
  return (
    <StyledFlex dir="col" align="center">
      <Responsive device="desktop">
        <Logo />
      </Responsive>
      <Responsive device="mobile">
        <Logo imageSize={42} />
      </Responsive>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" isLoading={isLoading} fullWidth css={ButtonStyles}>
          로그인
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

const ButtonStyles = (theme: EmotionTheme) => css`
  @media ${theme.mediaQuery.sm} {
    margin-top: 24px;
  }
`;
