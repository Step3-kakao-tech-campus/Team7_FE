import styled from '@emotion/styled';
import type { InfoAreaProps } from '@/components/common/InfoArea';

export const Root = styled.ul<InfoAreaProps>`
  padding: 0.6em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_gray_200};
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  text-align: ${({ textAlign }) => textAlign};
  list-style-type: ${({ isDot }) => (isDot ? 'disc' : 'none')};
  list-style-position: inside;
`;

export const Info = styled.li`
  margin: 0.4rem;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 14px;
  }
`;
