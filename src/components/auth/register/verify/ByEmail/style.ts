import styled from '@emotion/styled';
import Button from '@/components/common/Button';

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  margin-top: 3rem;
`;

export const VerifyButton = styled(Button)`
  margin-top: 0.7rem;
  padding: 0.8rem 0;
  z-index: 10;
`;
