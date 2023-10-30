import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useGetTil } from '@/api/hooks/til';
import Comment from '@/components/TILWrite/Comments';
import Footer from '@/components/TILWrite/Footer';
import Header from '@/components/TILWrite/Header';
import Reference from '@/components/TILWrite/Reference';
import RoadMap from '@/components/TILWrite/RoadMap';
import MobileHeader from '@/components/TILWrite/mobile/MobileHeader';
import Responsive from '@/components/common/Responsive';
import EmptyLayout from '@/components/layout/EmptyLayout';
import { useDrawerState } from '@/hooks/useDrawerState';
import { emotionTheme } from '@/styles/emotion';
import { setLayout } from '@/utils/layout';

const Editor = dynamic(() => import('@/components/TILWrite/Ckeditor'), { ssr: false });

const TILWrite = () => {
  const [TILContent, setTILContent] = useState<string>('');

  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  const handleTILContent = (content: string) => {
    setTILContent(content);
  };

  const {
    isOpen: asideOpen,
    isMount: asideMount,
    handleOpen: handleOpenAside,
    handleClose: handleCloseAside,
    handleToggle: handleToggleAside,
  } = useDrawerState({
    defaultValue: true,
    duration: DURATION,
  });

  const {
    isOpen: referenceOpen,
    handleClose: handleCloseReference,
    handleOpen: handleOpenReference,
  } = useDrawerState({
    defaultValue: false,
    duration: DURATION,
  });

  const {
    isOpen: commentOpen,
    handleClose: handleCloseComment,
    handleOpen: handleOpenComment,
  } = useDrawerState({
    defaultValue: false,
    duration: DURATION,
    runWhenTrue: () => {
      handleOpenAside();
      handleCloseReference();
    },
  });

  const handleToggleResize = () => {
    handleCloseReference();
    handleCloseComment();
    handleToggleAside();
  };

  return (
    <Root>
      <Responsive device="desktop">
        <Header TILContent={TILContent} handleOpenCommentAside={handleOpenComment} />
      </Responsive>

      <Responsive device="mobile">
        <MobileHeader />
      </Responsive>

      <Container>
        {tilDetail?.isPersonal === false ? (
          <EditorContainer
            initial="asideOpen"
            animate={asideOpen ? 'asideOpen' : 'asideClosed'}
            variants={editorVariants}
            transition={{ type: 'tween', duration: DURATION }}>
            <Editor handleTILContent={handleTILContent} />
          </EditorContainer>
        ) : (
          <PersonalEditorContainer>
            <Editor handleTILContent={handleTILContent} />
          </PersonalEditorContainer>
        )}

        {tilDetail?.isPersonal === false && (
          <AsideContainer>
            <ResizeHandle onClick={handleToggleResize} />

            {asideOpen && (
              <RoadMap
                asideMount={asideMount}
                handleCloseAside={() => handleCloseAside(handleCloseReference)}
                handleOpenReferenceAside={handleOpenReference}
              />
            )}

            <ExtraDrawerMotion
              initial="closed"
              animate={referenceOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <Reference handleCloseReferenceAside={() => handleCloseReference()} />
            </ExtraDrawerMotion>

            <ExtraDrawerMotion
              initial="closed"
              animate={commentOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <Comment handleCloseCommentAside={() => handleCloseComment()} />
            </ExtraDrawerMotion>
          </AsideContainer>
        )}
      </Container>

      <Footer TILContent={TILContent} />
    </Root>
  );
};

export default TILWrite;

setLayout(TILWrite, EmptyLayout, true);

export const editorVariants = {
  asideOpen: {
    width: `${emotionTheme.layout.tilWrite.defaultEditorWidth}`,
  },
  asideClosed: {
    width: `calc(${emotionTheme.layout.tilWrite.maxEditorWidth} - ${emotionTheme.layout.tilWrite.resizeHandleWidth} )`,
  },
};

export const extraDrawerVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: '100%', opacity: 0 },
};

export const DURATION = 0.3;

export const Root = styled.div`
  overflow-x: hidden;
  height: 100%;
`;

export const EditorContainer = styled(motion.div)`
  width: ${({ theme }) => theme.layout.tilWrite.defaultEditorWidth};
  flex-shrink: 0;
  overflow-y: scroll;
  background-color: #fff;

  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100% !important;
  }
`;

export const PersonalEditorContainer = styled.div`
  width: ${({ theme }) => theme.layout.tilWrite.maxEditorWidth};
  flex-shrink: 0;
  overflow-y: scroll;
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

export const Container = styled.div`
  display: flex;
  height: ${({ theme }) =>
    `calc(100% - ${theme.layout.tilWrite.headerHeight} - ${theme.layout.tilWrite.footerHeight})`};
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
  width: ${({ theme }) => `calc(${theme.layout.tilWrite.asideWidth})`};
  height: ${({ theme }) =>
    `calc(100% - ${theme.layout.tilWrite.headerHeight} - ${theme.layout.tilWrite.footerHeight})`};
  background-color: white;
  overflow-y: scroll;
`;
