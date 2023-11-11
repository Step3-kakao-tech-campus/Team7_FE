import styled from '@emotion/styled';

export const RoadmapInfoForm = styled.form<{ path: string }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: ${({ path }) => (path === 'create' ? '0 15px' : '0')};

  & > button {
    align-self: flex-end;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    gap: 15px;
    padding: 0 15px;

    & > button {
      width: 100%;
    }
  }
`;

export const RoadmapEditButton = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQuery.md} {
    gap: 20px;
    margin-top: 15px;

    & > h2 {
      display: none;
    }

    & > section {
      width: 100%;
    }

    & > section > button {
      width: 100%;
    }
  }
`;

export const Label = styled.p`
  margin-bottom: 5px;
  font-size: 18.72px;
  font-weight: 600;
`;
