import styled from '@emotion/styled';
import Button from '@/components/common/Button';

export const TextButton = styled(Button)`
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
