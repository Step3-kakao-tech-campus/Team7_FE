import Footer from '@/components/TILView/TILViewSection/Footer';
import Header from '@/components/TILView/TILViewSection/Header';
import TILView from '@/components/TILView/TILViewSection/TILView';
import MobileHeader from '@/components/TILView/TILViewSection/mobile/MobileHeader';
import { DURATION } from '@/components/TILWrite/TILWriteSection';
import Responsive from '@/components/common/Responsive';
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
