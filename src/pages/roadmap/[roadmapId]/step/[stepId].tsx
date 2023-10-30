import { QueryErrorResetBoundary } from '@tanstack/react-query';
import styled from '@emotion/styled';
import FeatureInfoSection from '@/components/Roadmap/PeopleTIL/FeatureInfoSection';
import PeopleTILSection from '@/components/Roadmap/PeopleTIL/PeopleTILSection';
import FallbackErrorBoundary from '@/components/common/FallbackErrorBoundary';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';

const PeopleTil = () => {
  return (
    <>
      <Root>
        <Inner>
          <FeatureInfoSection />
          <QueryErrorResetBoundary>
            <FallbackErrorBoundary fallbackRender={PeopleTILSection.Fallback}>
              <PeopleTILSection />
            </FallbackErrorBoundary>
          </QueryErrorResetBoundary>
        </Inner>
      </Root>
    </>
  );
};

export default PeopleTil;

setLayout(PeopleTil, HeaderLayout, true);

const Root = styled.main``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;
