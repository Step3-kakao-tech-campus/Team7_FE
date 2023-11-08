import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useGetTils } from '@/api/hooks/til';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import { DURATION } from '@/components/tilWrite/TILWriteSection';
import Comment from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Comments';
import Reference from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Reference';
import RoadMap from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/RoadMap';
import type { useAutoSave } from '@/components/tilWrite/TILWriteSection/useAutoSave';
import { useStepTitle } from '@/components/tilWrite/TILWriteSection/useStepTitle';
import type { useDrawerState } from '@/hooks/useDrawerState';
import { emotionTheme } from '@/styles/emotion';
import * as Styled from './style';

const Editor = dynamic(() => import('@/components/tilWrite/TILWriteSection/TILEditor/Ckeditor'), { ssr: false });

interface TILEditorProps {
  roadmapAsideState: ReturnType<typeof useDrawerState>['state'];
  referenceAsideState: ReturnType<typeof useDrawerState>['state'];
  commentAsideState: ReturnType<typeof useDrawerState>['state'];
  roadmapAsideHandler: ReturnType<typeof useDrawerState>['handler'];
  referenceAsideHandler: ReturnType<typeof useDrawerState>['handler'];
  commentAsideHandler: ReturnType<typeof useDrawerState>['handler'];
  autoSavedTimeHandler: ReturnType<typeof useAutoSave>['autoSavedTimeHandler'];
  handleTILContent: (content: string) => void;
}

const TILEditor = (props: TILEditorProps) => {
  const {
    roadmapAsideState,
    referenceAsideState,
    commentAsideState,
    roadmapAsideHandler,
    referenceAsideHandler,
    commentAsideHandler,
    autoSavedTimeHandler,
    handleTILContent,
  } = props;

  const { query } = useRouter();
  const { stepTitle, handleStepTitle } = useStepTitle();
  const { tilDetail } = useGetTils({
    tilId: Number(query.tilId),
  });

  const handleToggleResize = useCallback(() => {
    referenceAsideHandler.handleClose();
    commentAsideHandler.handleClose();
    roadmapAsideHandler.handleToggle();
  }, []);

  return (
    <Styled.Root>
      {tilDetail?.isPersonal === false ? (
        <>
          <Styled.EditorContainer
            initial="asideOpen"
            animate={roadmapAsideState.isOpen ? 'asideOpen' : 'asideClosed'}
            variants={editorVariants}
            transition={{ type: 'tween', duration: DURATION }}>
            <Editor handleTILContent={handleTILContent} autoSavedTimeHandler={autoSavedTimeHandler} />
          </Styled.EditorContainer>

          <Styled.AsideContainer>
            <Styled.ResizeHandle onClick={handleToggleResize} />

            {roadmapAsideState.isOpen && (
              <RoadMap
                asideMount={roadmapAsideState.isMount}
                handleCloseAside={() => roadmapAsideHandler.handleClose(referenceAsideHandler.handleClose)}
                handleOpenReferenceAside={referenceAsideHandler.handleOpen}
                autoSavedTimeHandler={autoSavedTimeHandler}
                handleStepTitle={handleStepTitle}
              />
            )}

            <Styled.ExtraDrawerMotion
              initial="closed"
              animate={referenceAsideState.isOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <FallbackErrorBoundary FallbackRender={Reference.Fallback}>
                <Reference
                  handleCloseReferenceAside={() => referenceAsideHandler.handleClose()}
                  stepTitle={stepTitle}
                />
              </FallbackErrorBoundary>
            </Styled.ExtraDrawerMotion>

            <Styled.ExtraDrawerMotion
              initial="closed"
              animate={commentAsideState.isOpen ? 'open' : 'closed'}
              variants={extraDrawerVariants}
              transition={{ type: 'tween', duration: DURATION }}>
              <Comment handleCloseCommentAside={() => commentAsideHandler.handleClose()} />
            </Styled.ExtraDrawerMotion>
          </Styled.AsideContainer>
        </>
      ) : (
        <Styled.PersonalEditorContainer>
          <Editor handleTILContent={handleTILContent} autoSavedTimeHandler={autoSavedTimeHandler} />
        </Styled.PersonalEditorContainer>
      )}
    </Styled.Root>
  );
};

export default TILEditor;

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
