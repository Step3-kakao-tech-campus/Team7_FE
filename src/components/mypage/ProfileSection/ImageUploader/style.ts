import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const EditTag = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 4px 8px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  border-radius: 6px;
`;
