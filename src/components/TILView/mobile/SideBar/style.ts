import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled.div<{ referenceOpen?: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 100001;
  background-color: #fff;
  width: 100%;
  height: 100dvh;
  overflow-y: ${({ referenceOpen }) => (referenceOpen ? 'hidden' : 'scroll')};
  overflow-x: hidden;
  animation: content- 0.3s cubic-bezier(0.16, 1, 0.3, 1);

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
  z-index: 2;
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
    padding: 0 6px 0 6px;
  }
`;

export const ReferenceContainer = styled(motion.div)`
  position: fixed;
  top: 58px;
  left: 0;
  height: 100dvh;
  width: 100vw;
  overflow-y: scroll;
  padding-bottom: 20px;
  background-color: #fff;
`;
