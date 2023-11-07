import dynamic from 'next/dynamic';
import Comment from '@/components/TILView/TILViewSection/TILView/Comments';
import { DURATION } from '@/components/TILWrite/TILWriteSection';
import { editorVariants } from '@/components/TILWrite/TILWriteSection/TILEditor';
import { EditorContainer, ResizeHandle, AsideContainer } from '@/components/TILWrite/TILWriteSection/TILEditor/style';
import { Root } from '@/components/TILWrite/TILWriteSection/TILEditor/style';
import type { useDrawerState } from '@/hooks/useDrawerState';

const Editor = dynamic(() => import('@/components/TILView/TILViewSection/TILView/Ckeditor'), { ssr: false });

interface TILViewProps {
  commentAsideState: ReturnType<typeof useDrawerState>['state'];
  commentAsideHandler: ReturnType<typeof useDrawerState>['handler'];
}

const TILView = (props: TILViewProps) => {
  const { commentAsideState, commentAsideHandler } = props;

  const handleToggleResize = () => {
    commentAsideHandler.handleToggle();
  };

  return (
    <Root>
      <EditorContainer
        initial="asideOpen"
        animate={commentAsideState.isOpen ? 'asideOpen' : 'asideClosed'}
        variants={editorVariants}
        transition={{ type: 'tween', duration: DURATION }}>
        <Editor />
      </EditorContainer>

      <AsideContainer>
        <ResizeHandle onClick={handleToggleResize} />

        {commentAsideState.isOpen && (
          <Comment
            asideMount={commentAsideState.isMount}
            handleCloseCommentAside={() => commentAsideHandler.handleClose()}
          />
        )}
      </AsideContainer>
    </Root>
  );
};

export default TILView;
