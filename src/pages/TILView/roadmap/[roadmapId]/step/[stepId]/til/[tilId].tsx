import dynamic from 'next/dynamic';
import Comment from '@/components/TILView/Comments';
import Footer from '@/components/TILView/Footer';
import Header from '@/components/TILView/Header';
import MobileHeader from '@/components/TILView/mobile/MobileHeader';
import Responsive from '@/components/common/Responsive';
import EmptyLayout from '@/components/layout/EmptyLayout';
import { useDrawerState } from '@/hooks/useDrawerState';
import {
  editorVariants,
  DURATION,
  Root,
  EditorContainer,
  ResizeHandle,
  Container,
  AsideContainer,
} from '@/pages/TILWrite/roadmap/[roadmapId]/step/[stepId]/til/[tilId]';
import { setLayout } from '@/utils/layout';

const Editor = dynamic(() => import('@/components/TILView/Ckeditor'), { ssr: false });

const TILView = () => {
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

  const handleToggleResize = () => {
    handleToggleAside();
  };

  return (
    <Root>
      <Responsive device="desktop">
        <Header handleOpenCommentAside={handleOpenAside} />
      </Responsive>
      <Responsive device="mobile">
        <MobileHeader />
      </Responsive>

      <Container>
        <EditorContainer
          initial="asideOpen"
          animate={asideOpen ? 'asideOpen' : 'asideClosed'}
          variants={editorVariants}
          transition={{ type: 'tween', duration: DURATION }}>
          <Editor />
        </EditorContainer>

        <AsideContainer>
          <ResizeHandle onClick={handleToggleResize} />

          {asideOpen && <Comment asideMount={asideMount} handleCloseCommentAside={() => handleCloseAside()} />}
        </AsideContainer>
      </Container>
      <Footer />
    </Root>
  );
};

export default TILView;

setLayout(TILView, EmptyLayout, true);
