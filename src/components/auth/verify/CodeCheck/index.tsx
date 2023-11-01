import { motion } from 'framer-motion';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { EmailCodeCheckRequest } from '@/api/auth/type';
import { usePostEmailCodeCheck } from '@/api/hooks/auth';
import * as Styled from '@/components/auth/verify/CodeCheck/style';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import { tilyLinks } from '@/constants/links';

interface CodeCheckProps {
  location: 'register' | 'password';
  email: string;
}

const CodeCheck = (props: CodeCheckProps) => {
  const { location, email } = props;
  const router = useRouter();

  const { postEmailCodeCheckAsync, isLoading } = usePostEmailCodeCheck();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
      code: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<EmailCodeCheckRequest> = async (formData) => {
    console.log(formData);
    const data = await postEmailCodeCheckAsync(formData);

    if (data?.code === 200) {
      if (location === 'register') {
        router.push({
          pathname: tilyLinks.register(),
          query: {
            email: email,
          },
        });
      } else {
        router.push({
          pathname: tilyLinks.changePassword(),
          query: {
            email: email,
          },
        });
      }
    }
  };

  return (
    <Styled.CodeDiv onSubmit={handleSubmit(onSubmit)}>
      <motion.div>
        <InfoArea textAlign="center" isDot={false}>
          <InfoArea.Info>해당 이메일로 인증코드를 전송하였습니다.</InfoArea.Info>
          <InfoArea.Info>아래에 인증코드를 입력해주세요.</InfoArea.Info>
        </InfoArea>
      </motion.div>

      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="인증 코드를 입력해주세요."
            message={errors.code?.message}
            status={errors.code && 'error'}
            {...field}
            onBlur={() => {
              scrollTo(0, 0);
            }}
          />
        )}
      />
      <Button fullWidth isLoading={isLoading}>
        인증하기
      </Button>
    </Styled.CodeDiv>
  );
};

export default CodeCheck;
