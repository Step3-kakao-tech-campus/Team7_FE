import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  font-size: 1rem;
`;

export const Info = styled.p`
  margin-top: 0.375rem;
  padding: 0.6em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_gray_200};
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.3rem;
`;
