import { Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import usePassword from '@/components/auth/change-password/PasswordForm/usePassword';
import AuthForm from '@/components/auth/common/AuthForm';
import AuthLogo from '@/components/auth/common/AuthLogo';
import AuthModal from '@/components/auth/common/AuthModal';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import TILY_LINKS from '@/constants/links';
import REGEX from '@/constants/regex';

const PasswordForm = () => {
  const router = useRouter();
  const { isOpen, handleClose, isLoading, control, handleSubmit, getValues, errors, onSubmit } = usePassword();

  return (
    <>
      <Flex dir="col" align="center" gap={2} fullWidth>
        <AuthLogo />
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="새 비밀번호를 입력해주세요."
                message={errors.password?.message}
                status={errors.password ? 'error' : 'default'}
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
                placeholder="새 비밀번호 확인"
                message={errors.passwordConfirm?.message}
                status={errors.passwordConfirm ? 'error' : 'default'}
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
              변경
            </Button>
          </TwoButtonContainer>
        </AuthForm>
      </Flex>
      <AuthModal isOpen={isOpen} onClose={handleClose} content="비밀번호 변경이 완료되었습니다." />
    </>
  );
};

export default PasswordForm;
