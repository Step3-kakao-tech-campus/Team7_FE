import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { usePatchUserPassword } from '@/api/hooks/user';
import { useGetUsers } from '@/api/hooks/user';
import type { PatchUserPasswordRequest } from '@/api/user/type';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import REGEX from '@/constants/regex';
import * as Styled from './style';

const EditSection = () => {
  const { user } = useGetUsers();
  const { patchUserPasswordAsync, isLoading } = usePatchUserPassword();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      curPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    },
    mode: 'onSubmit',
  });

  // input 에서 Enter 입력 시 submit 되는 것을 방지
  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  const onSubmit: SubmitHandler<PatchUserPasswordRequest> = async (formData) => {
    patchUserPasswordAsync({
      body: {
        curPassword: formData.curPassword,
        newPassword: formData.newPassword,
        newPasswordConfirm: formData.newPasswordConfirm,
      },
    });
    reset();
  };

  return (
    <Styled.Root onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
      <Styled.EmailContainer>
        <Styled.Title>이메일</Styled.Title>
        <Styled.Email>{user?.email}</Styled.Email>
      </Styled.EmailContainer>

      <Styled.PasswordContainer>
        <Styled.Title>비밀번호</Styled.Title>
        <Controller
          name="curPassword"
          control={control}
          rules={{
            required: '필수 정보입니다.',
            pattern: {
              value: REGEX.password(),
              message: '비밀 번호는 영문, 숫자, 특수문자 포함한 8~20자입니다.',
            },
          }}
          render={({ field }) => (
            <Input
              css={Styled.InputContainerStyles}
              inputStyles={Styled.InputStyles}
              type="password"
              placeholder="현재 비밀번호"
              message={errors.curPassword?.message}
              status={errors.curPassword ? 'error' : 'default'}
              {...field}
            />
          )}
        />
        <Controller
          name="newPassword"
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
              css={Styled.InputContainerStyles}
              type="password"
              placeholder="새 비밀번호"
              message={errors.newPassword?.message}
              status={errors.newPassword ? 'error' : 'default'}
              {...field}
            />
          )}
        />

        <Styled.SubmitContainer>
          <Controller
            name="newPasswordConfirm"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              validate: (value) => value === getValues('newPassword') || '비밀번호와 일치하지 않습니다',
            }}
            render={({ field }) => (
              <Input
                css={Styled.InputContainerStyles}
                type="password"
                placeholder="새 비밀번호 확인"
                message={errors.newPasswordConfirm?.message}
                status={errors.newPasswordConfirm ? 'error' : 'default'}
                {...field}
              />
            )}
          />

          <Button type="submit" css={Styled.SubmitButtonStyles} isLoading={isLoading}>
            수정
          </Button>
        </Styled.SubmitContainer>
      </Styled.PasswordContainer>
    </Styled.Root>
  );
};

export default EditSection;
