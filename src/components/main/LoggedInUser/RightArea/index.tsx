import { forwardRef } from 'react';
import { memo } from 'react';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import History from '@/components/main/LoggedInUser/RightArea/History';
import TILSection from '@/components/main/LoggedInUser/RightArea/TILSection';
import * as Styled from './style';

interface RightAreaProps {}

const RightArea = forwardRef<HTMLDivElement, RightAreaProps>((_, onboardRef) => {
  return (
    <Styled.RightArea>
      <History ref={onboardRef} />
      <FallbackErrorBoundary FallbackRender={TILSection.Fallback}>
        <TILSection />
      </FallbackErrorBoundary>
    </Styled.RightArea>
  );
});

export default memo(RightArea);
