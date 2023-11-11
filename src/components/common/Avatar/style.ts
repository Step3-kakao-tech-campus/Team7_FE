import Image from 'next/image';
import styled from '@emotion/styled';

export const Avatar = styled(Image)`
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 50%;
  object-fit: cover;
`;
