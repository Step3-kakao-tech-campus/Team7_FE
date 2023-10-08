import type { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import ByEmail from '@/components/auth/verify/ByEmail';
import Flex from '@/components/common/Flex';
import Logo from '@/components/common/Logo';
import { tilyLinks } from '@/constants/links';

const Verify: FC = () => {
  return (
    <StyledFlex dir="col" align="center">
      <Logo />
      <ByEmail />
      <StyledLoginButton href={tilyLinks.login()}>이미 계정이 있나요? 로그인하기</StyledLoginButton>
    </StyledFlex>
  );
};

export default Verify;

const StyledFlex = styled(Flex)`
  width: 100%;
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
