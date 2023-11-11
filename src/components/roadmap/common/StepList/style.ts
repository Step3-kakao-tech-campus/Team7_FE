import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';

export const ManageStepHeader = styled(Flex)`
  margin-bottom: 15px;

  & > button {
    background-color: ${({ theme }) => theme.colors.gray_500};
    color: black;
    font-weight: 600;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    justify-content: center;
    margin-top: 15px;

    & > h2 {
      display: none;
    }

    & > button {
      width: 95%;
    }
  }
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 1.25rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & > h3 {
      font-size: 16px;
    }
  }
`;
