import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { postEmailCheck, postEmailCodeCheck } from '@/api/auth';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import { useModalState } from '@/components/common/Modal/useModalState';
import { EMAIL_REGEX } from '@/constants/regex';

type EmailFormStates = 'emailReady' | 'codeReady' | 'valid';

interface EmailFormInput {
  email: string;
  code: string;
}

const ByEmail = () => {
  const [emailState, setEmailState] = useState<EmailFormStates>('emailReady');
  const [email, setEmail] = useState('');
  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      code: '',
    },
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<EmailFormInput> = async (data) => {
    if (emailState === 'emailReady' && !data.code) {
      const email = data.email;
      const { success, code, message, result } = await postEmailCheck({ email: email });

      if (code === 200) {
        setEmailState('codeReady');
        setEmail(email);
      } else {
        handleOpen();
      }
    } else if (emailState === 'codeReady') {
      const email = data.email;
      const verifyCode = data.code;

      const { success, code, message, result } = await postEmailCodeCheck({ email: email, code: verifyCode });

      if (code === 200) {
        router.push({
          pathname: '/auth/register',
          query: {
            email: email,
          },
        });
      } else {
        setError('code', { type: '400', message: message });
      }
    }
  };

  return (
    <>
      <StyledEmailForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: '이메일을 입력해주세요.',
            pattern: {
              value: EMAIL_REGEX,
              message: '이메일의 형식을 확인해주세요.',
            },
          }}
          render={({ field }) => (
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              message={errors.email?.message}
              status={errors.email ? 'error' : 'default'}
              disabled={emailState === 'codeReady'}
              {...field}
            />
          )}
        />
        {emailState === 'codeReady' && (
          <StyledCodeDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}>
            <StyeldReSendButton
              variant="ghost"
              onClick={async (e) => {
                e.preventDefault();
                const { success, code, message, result } = await postEmailCheck({ email: email });
              }}>
              재전송하기
            </StyeldReSendButton>
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
          </StyledCodeDiv>
        )}

        <StyledButton
          fullWidth
          onClick={() => {
            // handleOpen();
          }}>
          {emailState !== 'codeReady' ? '이메일 확인' : '인증하기'}
        </StyledButton>
      </StyledEmailForm>

      <Modal width={20} isOpen={isOpen} onClose={handleClose}>
        <ModalContainer>
          <Title>이미 사용중인 이메일입니다.</Title>
          <Info dir="col">
            <InfoText>해당 이메일로 로그인하거나</InfoText>
            <InfoText>다른 이메일 주소를 입력해 주세요.</InfoText>
          </Info>
          <ButtonContainer dir="col">
            <LoginButton>로그인</LoginButton>
            <TryButton
              onClick={() => {
                handleClose();
              }}
              variant="ghost">
              다시 입력
            </TryButton>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ByEmail;

const StyledEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  margin-top: 3rem;
`;

const StyledCodeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyeldReSendButton = styled(Button)`
  align-self: flex-end;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  transition: all 0.1s;

  &:hover {
    color: #5d5d5d;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 0.7rem;
  padding: 0.8rem 0;
  z-index: 10;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h3`
  text-align: center;
`;

const Info = styled(Flex)`
  text-align: center;
  color: #94a3b8;
`;
const InfoText = styled.p`
  text-align: center;
`;

const ButtonContainer = styled(Flex)``;
const LoginButton = styled(Button)`
  border-radius: 10px;
`;
const TryButton = styled(Button)``;
