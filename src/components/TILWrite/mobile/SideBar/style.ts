import { motion } from 'framer-motion';
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
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

export const CloseButtonStyles = css`
  position: fixed;
  top: 4px;
  right: 4px;
  padding: 16px;
  z-index: 100002;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};
  font-size: 20px;
  font-weight: 500;
`;

export const TabName = styled.button<{ isActive: boolean }>`
  padding: 16px;
  border-bottom: 3px solid transparent;

  ${({ isActive, theme }) => css`
    ${isActive &&
    css`
      border-bottom: 3px solid ${theme.colors.black};
      font-weight: 700;
    `}
  `};
`;

export const StepList = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 0 1rem;
  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-shrink: 0;
    height: 100%;
    padding: 0 1rem 0 0;
  }
`;

export const ReferenceContainer = styled(motion.div)`
  flex-shrink: 0;
  display: flex;
  overflow-y: scroll;
`;
