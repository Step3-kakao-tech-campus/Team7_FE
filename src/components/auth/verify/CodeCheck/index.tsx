import { motion } from 'framer-motion';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';
import * as Styled from '@/components/auth/verify/CodeCheck/style';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import { type EmailFormInput } from '../ByEmail';

interface CodeCheckProps {
  emailMutateAsync: (email: string) => Promise<unknown>;
  email: string;
  control: Control<EmailFormInput>;
  errors: FieldErrors<EmailFormInput>;
}

const CodeCheck = (props: CodeCheckProps) => {
  const { emailMutateAsync, email, control, errors } = props;
  return (
    <Styled.CodeDiv
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3 }}>
      <Styled.ReSendButton
        variant="ghost"
        onClick={async (e) => {
          e.preventDefault();
          emailMutateAsync(email);
        }}>
        재전송하기
      </Styled.ReSendButton>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }}>
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
            status={errors.code ? 'error' : 'default'}
            {...field}
          />
        )}
      />
    </Styled.CodeDiv>
  );
};

export default CodeCheck;
