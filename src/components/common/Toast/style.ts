import styled from '@emotion/styled';

export const Root = styled.div<{ isError: boolean }>`
  width: 50%;
  padding: 1.25rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ isError }) => (isError ? `#ff5555` : '#09090b')};
  color: #fff;
  font-weight: 600;
  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(16, 24, 40, 0.1);
`;
