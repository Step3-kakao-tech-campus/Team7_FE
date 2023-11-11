import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Background = styled.div<{ isBackDrop: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.layer.modalBackground};
  background-color: ${({ isBackDrop }) => (isBackDrop ? 'rgb(0 0 0 / 70%)' : 'transparent')};
  width: 100%;
  height: 100%;
`;
export const Root = styled(motion.div)``;

export const Container = styled.div<{ width?: number }>`
  position: relative;
  z-index: 101;
  max-height: 90vh;
  border-radius: 10px;
  background: #fff;
  width: ${({ width }) => width ?? 28}rem;
  color: ${({ theme }) => theme.colors.black};
  box-shadow:
    0px 4px 6px -4px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.black};
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 94vw;
  }
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
  padding: 2rem 2.5rem 1.6rem;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 25px 15px;
  }
`;
