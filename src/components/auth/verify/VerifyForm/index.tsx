import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';
import Responsive from '@/components/common/Responsive';
import { tilyLinks } from '@/constants/links';
import ByEmail from '../ByEmail';

interface VerifyFormProps {
  location: 'register' | 'password';
}

const VerifyForm = (props: VerifyFormProps) => {
  const { location } = props;
  const router = useRouter();

  const goLogin = () => router.push(tilyLinks.login());

  return (
    <>
      <Responsive device="desktop">
        <Logo onClick={goLogin} isPointer />
      </Responsive>
      <Responsive device="mobile">
        <Logo imageSize={42} onClick={goLogin} isPointer />
      </Responsive>
      <ByEmail location={location} />
      {location === 'register' && (
        <StyledLoginButton onClick={goLogin}>이미 계정이 있나요? 로그인하기</StyledLoginButton>
      )}
    </>
  );
};

export default VerifyForm;

const StyledLoginButton = styled(Button)`
  align-self: flex-end;
  margin-top: 0.5rem;
  padding: 0;
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_800};

  transition: all 0.1s;

  &:hover {
    color: #5d5d5d;
  }
`;
