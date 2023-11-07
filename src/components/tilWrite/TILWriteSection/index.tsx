import Responsive from '@/components/common/Responsive';
import Footer from '@/components/tilWrite/TILWriteSection/Footer';
import Header from '@/components/tilWrite/TILWriteSection/Header';
import TILEditor from '@/components/tilWrite/TILWriteSection/TILEditor';
import MobileHeader from '@/components/tilWrite/TILWriteSection/mobile/MobileHeader';
import { useAutoSave } from '@/components/tilWrite/TILWriteSection/useAutoSave';
import { useTILContent } from '@/components/tilWrite/TILWriteSection/useTILContent';
import { useDrawerState } from '@/hooks/useDrawerState';

const TILWriteSection = () => {
  const { TILContent, handleTILContent } = useTILContent();
  const { autoSavedTime, autoSavedTimeHandler } = useAutoSave();

  const { state: roadmapAsideState, handler: roadmapAsideHandler } = useDrawerState({
    defaultValue: true,
    duration: DURATION,
  });

  const { state: referenceAsideState, handler: referenceAsideHandler } = useDrawerState({
    defaultValue: false,
    duration: DURATION,
  });

  const { state: commentAsideState, handler: commentAsideHandler } = useDrawerState({
    defaultValue: false,
    duration: DURATION,
    runWhenTrue: () => {
      roadmapAsideHandler.handleOpen();
      referenceAsideHandler.handleClose();
    },
  });

  return (
    <>
      <Responsive device="desktop">
        <Header TILContent={TILContent} handleOpenCommentAside={commentAsideHandler.handleOpen} />
      </Responsive>

      <Responsive device="mobile">
        <MobileHeader autoSavedTimeHandler={autoSavedTimeHandler} />
      </Responsive>

      <TILEditor
        roadmapAsideState={roadmapAsideState}
        referenceAsideState={referenceAsideState}
        commentAsideState={commentAsideState}
        roadmapAsideHandler={roadmapAsideHandler}
        referenceAsideHandler={referenceAsideHandler}
        commentAsideHandler={commentAsideHandler}
        autoSavedTimeHandler={autoSavedTimeHandler}
        handleTILContent={handleTILContent}
      />
      <Footer TILContent={TILContent} autoSavedTime={autoSavedTime} />
    </>
  );
};

export default TILWriteSection;

export const DURATION = 0.3;
