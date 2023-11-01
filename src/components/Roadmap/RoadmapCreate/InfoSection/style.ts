import styled from '@emotion/styled';

export const Root = styled.section<{ where: 'create' | 'manage' }>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: ${({ where }) => (where === 'create' ? '0 15px' : '0')};
`;

export const CreateHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  @media ${({ theme }) => theme.mediaQuery.xs} {
    margin-top: 20px;

    & > h1 {
      font-size: 25px;
    }

    & > button {
      font-size: 14px;
    }
  }
`;

export const EditHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font-size: 32px;
  }
`;

export const RadioContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;
  margin-top: 0.7rem;
`;
