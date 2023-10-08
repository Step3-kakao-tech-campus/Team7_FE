import Link from 'next/link';
import styled from '@emotion/styled';

export const Title = styled.h3`
  margin: 2rem 0;
  text-align: center;
`;
export const LoginButton = styled(Link)`
  padding: 0.6rem 1rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  text-align: center;
`;
