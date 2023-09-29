import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  background-color: rgb(0 0 0 / 70%);
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<{ width?: number }>`
  position: relative;
  z-index: 101;
  border-radius: 20px;
  background: #fff;
  width: ${({ width }) => width ?? 28}rem;
  color: ${({ theme }) => theme.colors.black};
  box-shadow:
    0px 4px 6px -4px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 0px 0px 1px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
`;
