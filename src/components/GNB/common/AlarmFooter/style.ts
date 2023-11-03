import styled from '@emotion/styled';

export const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_200};

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 1rem 0;
    width: 50%;
    font-weight: 600;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_200};
    }

    & > span {
      display: flex;
      align-items: flex-end;
    }
  }

  & > button:nth-of-type(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray_200};
  }
`;
