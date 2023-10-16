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
import { useDrawerState } from '@/hooks/useDrawerState';
import { emotionTheme } from '@/styles/emotion';

const Editor = dynamic(() => import('@/components/TILWrite/Ckeditor'), { ssr: false });

const TILWrite = () => {
  const [referenceParam, setReferenceParam] = useState<{ roadmapId: number; stepId: number } | null>(null);
  const [TILContent, setTILContent] = useState<string>('');

  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  const handleSelectStepReference = (roadmapId: number, stepId: number) => {
    setReferenceParam({ roadmapId, stepId });
  };

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
      <Header handleOpenCommentAside={handleOpenComment} />
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
                handleSelectStepReference={handleSelectStepReference}
                handleOpenReferenceAside={handleOpenReference}
              />
            )}

            <ExtraDrawerMotion
              initial="closed"
              animate={referenceOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <Reference referenceParam={referenceParam} handleCloseReferenceAside={() => handleCloseReference()} />
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

const editorVariants = {
  asideOpen: {
    width: `${emotionTheme.layout.tilWrite.defaultEditorWidth}`,
  },
  asideClosed: {
    width: `calc(${emotionTheme.layout.tilWrite.maxEditorWidth} - ${emotionTheme.layout.tilWrite.resizeHandleWidth} )`,
  },
};

const extraDrawerVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: '100%', opacity: 0 },
};

const DURATION = 0.3;

const Root = styled.div`
  overflow-x: hidden;
  height: 100%;
`;

const EditorContainer = styled(motion.div)`
  width: ${({ theme }) => theme.layout.tilWrite.defaultEditorWidth};
  flex-shrink: 0;
  overflow-y: scroll;
  background-color: #fff;
`;

const PersonalEditorContainer = styled.div`
  width: ${({ theme }) => theme.layout.tilWrite.maxEditorWidth};
  flex-shrink: 0;
  overflow-y: scroll;
  background-color: #fff;
`;

const ResizeHandle = styled.div`
  position: sticky;
  top: 0;
  width: ${({ theme }) => theme.layout.tilWrite.resizeHandleWidth};
  height: 100%;
  background-image: url('/assets/icons/ic_spring.svg');
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  height: ${({ theme }) =>
    `calc(100% - ${theme.layout.tilWrite.headerHeight} - ${theme.layout.tilWrite.footerHeight})`};
`;

const AsideContainer = styled.aside`
  display: flex;
  flex: 1;
`;

const ExtraDrawerMotion = styled(motion.div)`
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
