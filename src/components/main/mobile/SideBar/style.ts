import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 100001;
  background-color: #fff;
  width: 100%;
  height: 100dvh;
  overflow-y: auto;
  animation: content-show 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes content-show {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

export const CloseButtonStyles = css`
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 16px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};
`;

export const TILInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_200};
  padding: 12px 16px;
  border-radius: 10px;
  width: fit-content;

  & > span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
`;

export const RoadmapContainer = styled.div`
  width: 40%;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_400};
`;

export const StepContainer = styled.div`
  width: 60%;
`;

export const Item = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 16px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};

  ${({ active, theme }) =>
    active &&
    `
        background-color: ${theme.colors.gray_200};
    `}
`;
