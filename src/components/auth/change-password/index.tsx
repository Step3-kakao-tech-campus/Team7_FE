import { useEffect } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { postEmailCode } from '@/api/auth';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';
import { PASSWORD_REGEX } from '@/constants/regex';
import { useModalState } from '@/hooks/useModalState';
import AuthModal from '../AuthModal';

interface ChangePasswordFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

const ChangePassword = () => {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data: ChangePasswordFormInput) => postEmailCode(data),
  });
  const { isOpen, handleOpen, handleClose } = useModalState();
  const router = useRouter();
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

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = async (formData) => {
    const data = await mutateAsync(formData);
    if (data?.code === 200) {
      handleOpen();
    } else {
      // 에러 처리
    }
  };

  useEffect(() => {
    if (router.query['email']) {
      if (Array.isArray(router.query['email'])) {
        setValue('email', router.query['email'][0]);
      } else {
        setValue('email', router.query['email']);
      }
    }
  }, [router.query, setValue]);

  return (
    <>
      <StyledFlex dir="col" align="center" gap={2}>
        <Logo />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: PASSWORD_REGEX,
                message: '영문, 숫자, 특수문자 포함한 8~20자의 비밀번호만 사용가능합니다.',
              },
            }}
            render={({ field }) => (
              <Input
                type="password"
                label="비밀번호"
                placeholder="새 비밀번호를 입력해주세요."
                message={errors.password?.message}
                status={errors.password ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              validate: (value) => value === getValues('password') || '비밀번호와 일치하지 않습니다',
            }}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="새 비밀번호 확인"
                message={errors.passwordConfirm?.message}
                status={errors.passwordConfirm ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <StyledButtonContainer>
            <StyledCancelButton href={tilyLinks.verify()}>취소</StyledCancelButton>
            <Button type="submit" isLoading={isLoading}>
              변경
            </Button>
          </StyledButtonContainer>
        </StyledForm>
      </StyledFlex>
      <AuthModal isOpen={isOpen} handleClose={handleClose} content="비밀번호 변경이 완료되었습니다." />
    </>
  );
};

export default ChangePassword;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;

  & > label {
    margin-bottom: 0.8rem;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  float: right;

  & > * {
    padding: 0.5rem 1.2rem;
  }

  & > a {
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledCancelButton = styled(Link)`
  margin-top: 5px;
`;
