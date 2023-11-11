import styled from '@emotion/styled';

export const Root = styled.header`
  display: flex;
  align-items: center;

  padding: 0 0.75rem;

  background-color: ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  height: ${({ theme }) => theme.layout.tilWrite.headerHeight};
`;

export const Title = styled.h1`
  flex: 1;
  margin-left: 1rem;
  font-size: 18px;
  font-weight: 700;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1.3rem;

  & > .swing {
    animation: swing 2s infinite linear;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
