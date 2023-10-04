import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import { useModalState } from '@/components/common/Modal/useModalState';
import { EMAIL_REGEX } from '@/constants/regex';

interface EmailFormInput {
  email: string;
}

const ByEmail = () => {
  const [emailState, setEmailState] = useState('none');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<EmailFormInput> = async (data) => {
    const email = data.email;
  };

  const { isOpen, handleOpen, handleClose } = useModalState();

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
              {...field}
            />
          )}
        />

        {emailState !== 'valid' && (
          <Button
            fullWidth
            onClick={() => {
              // handleOpen();
            }}>
            이메일 확인
          </Button>
        )}
      </StyledEmailForm>
      {emailState === 'valid' && (
        <StyledCodeForm>
          <StyeldButton variant="ghost">재전송하기</StyeldButton>
          <InfoArea textAlign="center" isDot={false}>
            <InfoArea.Info>해당 이메일로 인증코드를 전송하였습니다.</InfoArea.Info>
            <InfoArea.Info>아래에 인증코드를 입력해주세요.</InfoArea.Info>
          </InfoArea>
          <Input placeholder="인증 코드를 입력해주세요." />
          <Button fullWidth>인증하기</Button>
        </StyledCodeForm>
      )}
      <Modal width={20} isOpen={isOpen} onClose={handleClose}>
        <ModalContainer>
          <Title>이미 사용중인 이메일입니다.</Title>
          <Info dir="col">
            <InfoText>해당 이메일로 로그인하거나</InfoText>
            <InfoText>다른 이메일 주소를 입력해 주세요.</InfoText>
          </Info>
          <ButtonContainer dir="col">
            <LoginButton>로그인</LoginButton>
            <TryButton variant="ghost">다시 입력</TryButton>
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
  gap: 0.8rem;
  width: 100%;
  margin-top: 50px;
`;

const StyledCodeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const StyeldButton = styled(Button)`
  align-self: flex-end;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
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
