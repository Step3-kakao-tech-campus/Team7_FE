import Link from 'next/link';
import styled from '@emotion/styled';
import ByEmail from '@/components/auth/verify/ByEmail';
import Logo from '@/components/common/Logo';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { tilyLinks } from '@/constants/links';
import { setLayout } from '@/utils/layout';

export const RegisterVerifyPage = () => {
  return (
    <StyledVerifyPage>
      <Logo />
      <ByEmail type="register" />
      <StyledLoginButton href={tilyLinks.login()}>이미 계정이 있나요? 로그인하기</StyledLoginButton>
    </StyledVerifyPage>
  );
};

setLayout(RegisterVerifyPage, FullHeightLayout);

export default RegisterVerifyPage;

const StyledVerifyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 400px;
`;

const StyledLoginButton = styled(Link)`
  align-self: flex-end;
  margin-top: 0.5rem;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_800};

  transition: all 0.1s;

  &:hover {
    color: #5d5d5d;
  }
`;
