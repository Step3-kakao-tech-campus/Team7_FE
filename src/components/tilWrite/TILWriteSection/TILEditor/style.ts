import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  height: ${({ theme }) =>
    `calc(100% - ${theme.layout.tilWrite.headerHeight} - ${theme.layout.tilWrite.footerHeight})`};
`;

export const EditorContainer = styled(motion.div)`
  overflow-y: scroll;
  flex-shrink: 0;
  width: ${({ theme }) => theme.layout.tilWrite.defaultEditorWidth};
  background-color: #fff;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100% !important;
  }
`;

export const PersonalEditorContainer = styled.div`
  overflow-y: scroll;
  flex-shrink: 0;
  width: ${({ theme }) => theme.layout.tilWrite.maxEditorWidth};
  background-color: #fff;
`;

export const ResizeHandle = styled.div`
  position: sticky;
  top: 0;
  width: ${({ theme }) => theme.layout.tilWrite.resizeHandleWidth};
  height: 100%;
  background-image: url('/assets/icons/ic_spring.svg');
  cursor: pointer;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

export const ExtraDrawerMotion = styled(motion.div)`
  position: fixed;
  top: ${({ theme }) => theme.layout.tilWrite.headerHeight};
  left: ${({ theme }) =>
    `calc(${theme.layout.tilWrite.defaultEditorWidth} + ${theme.layout.tilWrite.resizeHandleWidth})`};
  z-index: 200;
  overflow-y: scroll;
  width: ${({ theme }) => `calc(${theme.layout.tilWrite.asideWidth})`};
  height: ${({ theme }) =>
    `calc(100% - ${theme.layout.tilWrite.headerHeight} - ${theme.layout.tilWrite.footerHeight})`};
  background-color: white;
`;
