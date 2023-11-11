import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 100001;
  width: 100%;
  height: 100dvh;
  background-color: #fff;
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

export const Header = styled.h3`
  width: 100%;
  height: 68px;
  padding: 22px 12px 12px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};
`;

export const CloseButtonStyles = css`
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 16px;
`;

export const RoadmapContainer = styled.div`
  width: 40%;
  height: calc(100%);
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
