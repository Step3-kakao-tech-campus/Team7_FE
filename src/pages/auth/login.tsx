import Link from 'next/link';
import styled from '@emotion/styled';
import Login from '@/components/auth/login';
import Flex from '@/components/common/Flex';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { tilyLinks } from '@/constants/links';
import { setLayout } from '@/utils/layout';

export const LoginPage = () => {
  return (
    <StyledRegisterPage>
      <Login />
      <StyledButtonContainer justify="space-between">
        <Link href={tilyLinks.verify()}>회원가입</Link>
        <Link href={tilyLinks.findPwVerify()}>비밀번호 찾기</Link>
      </StyledButtonContainer>
    </StyledRegisterPage>
  );
};

setLayout(LoginPage, FullHeightLayout);

export default LoginPage;

const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 400px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 100dvh;
  }
`;

const StyledButtonContainer = styled(Flex)`
  width: 100%;
  margin-top: 0.4rem;

  & > a {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_800};

    transition: all 0.1s;

    &:hover {
      color: #5d5d5d;
    }
  }
`;
