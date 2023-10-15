import styled from '@emotion/styled';

export const Root = styled.a``;

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 3px;
`;

export const Container = styled.div`
  padding: 12px 14px 14px 14px;

  width: 70%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_300};
  }
`;

export const Image = styled.img`
  width: 30%;
  background-position: contain;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  line-height: 1.3;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 24px;
  margin-bottom: 2px;
`;

export const Desc = styled.div`
  font-size: 0.75rem;
  line-height: 1.3;
  color: rgba(55, 53, 47, 0.65);
  height: 32px;
  overflow: hidden;
`;
