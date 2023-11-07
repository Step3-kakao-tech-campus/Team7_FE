import styled from '@emotion/styled';

// 모바일
export const UserName = styled.div`
  display: flex;
  align-items: center;
  & > span:first-of-type {
    font-size: 20px;
    font-weight: 700;
  }

  & > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const LayoutElement = styled.div`
  width: 24px;
  height: 24px;
`;
