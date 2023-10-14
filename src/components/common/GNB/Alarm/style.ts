import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: ${({ theme }) => theme.layer.headerAlarm};
  top: ${({ theme }) => theme.layout.headerHeight};
  right: 0;
  width: 27.5rem;
  max-height: 30.75rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

export const List = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
  list-style: none;
  cursor: pointer;
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

    & > span {
      display: flex;
      align-items: flex-end;
    }
  }

  & > button:nth-of-type(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray_200};
  }
`;

export const EmptyAlarmRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyAlarmText = styled.p`
  font-weight: 600;
`;
