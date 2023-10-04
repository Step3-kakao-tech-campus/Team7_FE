import type { FC } from 'react';
import styled from '@emotion/styled';
import ByEmail from '@/components/auth/register/verify/ByEmail';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Logo from '@/components/common/Logo';

const Verify: FC = () => {
  return (
    <StyledFlex dir="col" align="center">
      <Logo />
      <ByEmail />
      <StyledLoginButton variant="ghost">이미 계정이 있나요? 로그인하기</StyledLoginButton>
    </StyledFlex>
  );
};

export default Verify;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledLoginButton = styled(Button)`
  align-self: flex-end;
  margin-top: 10px;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
`;
