import Responsive from '@/components/common/Responsive';
import Footer from '@/components/tilView/TILViewSection/Footer';
import Header from '@/components/tilView/TILViewSection/Header';
import TILView from '@/components/tilView/TILViewSection/TILView';
import MobileHeader from '@/components/tilView/TILViewSection/mobile/MobileHeader';
import { DURATION } from '@/components/tilWrite/TILWriteSection';
import { useDrawerState } from '@/hooks/useDrawerState';

const TILViewSection = () => {
  const { state: commentAsideState, handler: commentAsideHandler } = useDrawerState({
    defaultValue: true,
    duration: DURATION,
  });

  return (
    <>
      <Responsive device="desktop">
        <Header handleOpenCommentAside={commentAsideHandler.handleOpen} />
      </Responsive>

      <Responsive device="mobile">
        <MobileHeader />
      </Responsive>

      <TILView commentAsideState={commentAsideState} commentAsideHandler={commentAsideHandler} />

      <Footer />
    </>
  );
};

export default TILViewSection;
