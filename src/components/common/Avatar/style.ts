import Image from 'next/image';
import styled from '@emotion/styled';

export const Avatar = styled(Image)`
  align-self: center;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
`;
