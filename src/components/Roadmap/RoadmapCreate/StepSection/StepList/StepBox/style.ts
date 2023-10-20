import styled from '@emotion/styled';

export const StepContainer = styled.article``;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray_500}`};
  background-color: ${({ theme }) => theme.colors.blue_gray_100};

  & img {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  & > h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const ContentContainer = styled.section`
  padding: 1.2rem 2rem;
`;
