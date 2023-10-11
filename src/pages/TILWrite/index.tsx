import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Comment from '@/components/TILWrite/Comments';
import Footer from '@/components/TILWrite/Footer';
import Header from '@/components/TILWrite/Header';
import Reference from '@/components/TILWrite/Reference';
import RoadMap from '@/components/TILWrite/RoadMap';
import type { EmotionTheme } from '@/styles/emotion';
import { emotionTheme } from '@/styles/emotion';

const Editor = dynamic(() => import('@/components/TILWrite/Ckeditor'), { ssr: false });

const TILWrite = () => {
  const [referenceOpen, setReferenceOpen] = useState(false);
  const [referenceMount, setReferenceMount] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentMount, setCommentMount] = useState(false);
  const [asideOpen, setAsideOpen] = useState(true);
  const [asideMount, setAsideMount] = useState(true);
  const handleCloseAside = () => {
    setAsideOpen(false);
    setReferenceOpen(false);
  };

  const handleCloseReferenceAside = () => {
    setReferenceOpen(false);
  };

  const handleOpenReferenceAside = () => {
    setReferenceOpen(true);
  };

  const handleOpenCommentAside = () => {
    setCommentOpen(true);
  };

  const handleCloseCommentAside = () => {
    setCommentOpen(false);
  };

  useEffect(() => {
    // aside가 마운트될때 drawer가 열리면 레이아웃 깨지는 현상이 발생하여 딜레이를 주었다.
    if (asideOpen) {
      setTimeout(() => {
        setAsideMount(true);
      }, 300);
    } else {
      setAsideMount(false);
    }
  }, [asideOpen]);

  useEffect(() => {
    // aside가 마운트될때 drawer가 열리면 레이아웃 깨지는 현상이 발생하여 딜레이를 주었다.
    if (referenceOpen) {
      setTimeout(() => {
        setReferenceMount(true);
      }, 300);
    } else {
      setReferenceMount(false);
    }
  }, [referenceOpen]);

  useEffect(() => {
    // aside가 마운트될때 drawer가 열리면 레이아웃 깨지는 현상이 발생하여 딜레이를 주었다.
    if (commentOpen) {
      setAsideOpen(true);
      setTimeout(() => {
        setCommentMount(true);
      }, 300);
    } else {
      setReferenceOpen(false);
      setCommentMount(false);
    }
  }, [commentOpen]);

  return (
    <Root>
      <Header handleOpenCommentAside={handleOpenCommentAside} />
      <Container>
        <EditorContainer
          initial="asideOpen"
          animate={asideOpen ? 'asideOpen' : 'asideClosed'}
          variants={editorVariants}
          transition={{ type: 'tween', duration: DURATION }}>
          <Editor />
        </EditorContainer>

        <AsideContainer>
          <ResizeHandle
            onClick={() => {
              setReferenceOpen(false);
              setCommentOpen(false);
              setAsideOpen((prev) => !prev);
            }}
          />

          {asideMount && asideOpen && (
            <RoadMap handleCloseAside={handleCloseAside} handleOpenReferenceAside={handleOpenReferenceAside} />
          )}

          <motion.aside
            css={extraDrawerStyles}
            initial="closed"
            animate={referenceOpen ? 'open' : 'closed'}
            variants={extraDrawerVariants}
            transition={{ type: 'tween' }}>
            {referenceMount && referenceOpen && <Reference handleCloseReferenceAside={handleCloseReferenceAside} />}
          </motion.aside>

          <motion.aside
            css={extraDrawerStyles}
            initial="closed"
            animate={commentOpen ? 'open' : 'closed'}
            variants={extraDrawerVariants}
            transition={{ type: 'tween' }}>
            {commentMount && commentOpen && <Comment handleCloseCommentAside={handleCloseCommentAside} />}
          </motion.aside>
        </AsideContainer>
      </Container>
      <Footer />
    </Root>
  );
};

export default TILWrite;

const editorVariants = {
  asideOpen: { width: `${emotionTheme.layout.defaultEditorWidth}` },
  asideClosed: { width: `calc(${emotionTheme.layout.maxEditorWidth} - ${emotionTheme.layout.resizeHandleWidth} )` },
};

const extraDrawerVariants = {
  open: { x: 0 },
  closed: { x: '100%' },
};

const DURATION = 0.3;

const Root = styled.div`
  overflow-x: hidden;
  height: 100%;
`;

const EditorContainer = styled(motion.div)`
  width: ${({ theme }) => theme.layout.defaultEditorWidth};
  flex-shrink: 0;
  overflow-y: scroll;
  background-color: #fff;
`;

const ResizeHandle = styled.div`
  position: sticky;
  top: 0;
  width: ${({ theme }) => theme.layout.resizeHandleWidth};
  height: 100%;
  background-image: url('/assets/icons/ic_spring.svg');
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  height: ${({ theme }) => `calc(100% - ${theme.layout.headerHeight} - ${theme.layout.footerHeight})`};
`;

const AsideContainer = styled.div`
  display: flex;
  flex: 1;
`;

const extraDrawerStyles = (theme: EmotionTheme) => css`
  position: fixed;
  top: ${theme.layout.headerHeight};
  left: calc(${theme.layout.defaultEditorWidth} + ${theme.layout.resizeHandleWidth});
  z-index: 100;
  width: calc(${theme.layout.asideWidth});
  height: calc(100% - ${theme.layout.headerHeight} - ${theme.layout.footerHeight});
  background-color: white;
  overflow-y: scroll;
`;
