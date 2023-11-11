import styled from '@emotion/styled';

export const Item = styled.li<{ isRead: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
  list-style: none;
  cursor: pointer;

  background-color: ${({ theme, isRead }) => (isRead ? theme.colors.white : theme.colors.rose_light)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem 1.5rem 1rem 1rem;
`;

export const Title = styled.p`
  font-weight: 600;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Commenter = styled.div`
  & > span:first-of-type {
    color: ${({ theme }) => theme.colors.rose};
    font-weight: 600;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const EmptyAlarmRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const EmptyAlarmText = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.125rem;
`;
