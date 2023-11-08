import { Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import AuthForm from '@/components/auth/common/AuthForm';
import AuthLogo from '@/components/auth/common/AuthLogo';
import AuthModal from '@/components/auth/common/AuthModal';
import useRegister from '@/components/auth/register/RegisterForm/useRegister';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import TILY_LINKS from '@/constants/links';
import REGEX from '@/constants/regex';

const RegisterForm = () => {
  const router = useRouter();
  const { isOpen, handleClose, isLoading, control, handleSubmit, getValues, errors, onSubmit } = useRegister();

  return (
    <>
      <AuthLogo />
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input label="이메일" placeholder="이메일을 입력해주세요." disabled {...field} />}
        />

        <Controller
          name="name"
          control={control}
          rules={{
            required: '필수 정보입니다.',
            pattern: {
              value: REGEX.name(),
              message: '2~10글자의 이름만 사용 가능합니다.',
            },
          }}
          render={({ field }) => (
            <Input
              label="이름"
              placeholder="이름을 입력해주세요."
              message={errors.name?.message}
              status={errors.name && 'error'}
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
            required: '필수 정보입니다.',
            pattern: {
              value: REGEX.password(),
              message: '영문, 숫자, 특수문자 포함한 8~20자의 비밀번호만 사용가능합니다.',
            },
          }}
          render={({ field }) => (
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              message={errors.password?.message}
              status={errors.password && 'error'}
              {...field}
              onBlur={() => {
                scrollTo(0, 0);
              }}
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
              label="비밀번호 확인"
              placeholder="비밀번호를 입력해주세요."
              message={errors.passwordConfirm?.message}
              status={errors.passwordConfirm && 'error'}
              {...field}
              onBlur={() => {
                scrollTo(0, 0);
              }}
            />
          )}
        />
        <TwoButtonContainer>
          <Button type="button" variant="ghost" onClick={() => router.push(TILY_LINKS.verify())}>
            취소
          </Button>
          <Button type="submit" isLoading={isLoading}>
            완료
          </Button>
        </TwoButtonContainer>
      </AuthForm>
      <AuthModal isOpen={isOpen} onClose={handleClose} content="회원가입이 완료되었습니다." />
    </>
  );
};

export default RegisterForm;
