import { motion } from 'framer-motion';
import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { axiosInstance } from '@/api';
import { useGetTil } from '@/api/hooks/til';
import Comment from '@/components/TILWrite/Drawer/Comments';
import Reference from '@/components/TILWrite/Drawer/Reference';
import RoadMap from '@/components/TILWrite/Drawer/RoadMap';
import Footer from '@/components/TILWrite/Footer';
import Header from '@/components/TILWrite/Header';
import MobileHeader from '@/components/TILWrite/mobile/MobileHeader';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import Responsive from '@/components/common/Responsive';
import EmptyLayout from '@/components/layout/EmptyLayout';
import { useDrawerState } from '@/hooks/useDrawerState';
import { emotionTheme } from '@/styles/emotion';
import { setLayout } from '@/utils/layout';

const Editor = dynamic(() => import('@/components/TILWrite/Ckeditor'), { ssr: false });

const TILWrite = () => {
  const [TILContent, setTILContent] = useState<string>('');
  const [autoSaveTime, setAutoSaveTime] = useState<AutoSaveTime>({
    active: false,
    time: new Date(),
  });
  const [stepTitle, setStepTitle] = useState<string>('');

  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  const handleTILContent = (content: string) => {
    setTILContent(content);
  };

  const handleStepTitle = (title: string) => {
    setStepTitle(title);
  };

  const handleAutoSaveTime = {
    activeAutoSave() {
      setAutoSaveTime({
        active: true,
        time: new Date(),
      });
    },
    clearAutoSave() {
      setAutoSaveTime({
        active: false,
        time: new Date(),
      });
    },
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
        <MobileHeader handleAutoSaveTime={handleAutoSaveTime} />
      </Responsive>

      <Container>
        {tilDetail?.isPersonal === false ? (
          <EditorContainer
            initial="asideOpen"
            animate={asideOpen ? 'asideOpen' : 'asideClosed'}
            variants={editorVariants}
            transition={{ type: 'tween', duration: DURATION }}>
            <Editor handleTILContent={handleTILContent} handleAutoSaveTime={handleAutoSaveTime} />
          </EditorContainer>
        ) : (
          <PersonalEditorContainer>
            <Editor handleTILContent={handleTILContent} handleAutoSaveTime={handleAutoSaveTime} />
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
                handleAutoSaveTime={handleAutoSaveTime}
                handleStepTitle={handleStepTitle}
              />
            )}

            <ExtraDrawerMotion
              initial="closed"
              animate={referenceOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <FallbackErrorBoundary FallbackRender={Reference.Fallback}>
                <Reference handleCloseReferenceAside={() => handleCloseReference()} stepTitle={stepTitle} />
              </FallbackErrorBoundary>
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

      <Footer TILContent={TILContent} autoSaveTime={autoSaveTime} />
    </Root>
  );
};

export default TILWrite;

setLayout(TILWrite, EmptyLayout);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;
  let isUserLogin = true;

  try {
    axiosInstance.defaults.headers.common['Authorization'] = cookies['accessToken'];
    await axiosInstance.get('users');
  } catch (err) {
    isUserLogin = false;
  }

  if (!isUserLogin) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export interface AutoSaveTime {
  active: boolean;
  time: Date;
}

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
