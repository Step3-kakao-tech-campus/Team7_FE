import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;

  & > button {
    border-color: black;
    border-radius: 1.5rem;
    font-weight: 600;
  }
`;

export const RoadmapCodeModal = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RoadmapCodeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
