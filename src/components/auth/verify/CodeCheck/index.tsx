import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import * as Styled from '@/components/auth/verify/CodeCheck/style';
import useCodeCheck from '@/components/auth/verify/CodeCheck/useCodeCheck';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';

interface CodeCheckProps {
  location: 'register' | 'password';
  email: string;
}

const CodeCheck = (props: CodeCheckProps) => {
  const { location, email } = props;

  const { isLoading, control, handleSubmit, errors, onSubmit } = useCodeCheck(location, email);

  return (
    <Styled.CodeForm onSubmit={handleSubmit(onSubmit)}>
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
    </Styled.CodeForm>
  );
};

export default CodeCheck;
