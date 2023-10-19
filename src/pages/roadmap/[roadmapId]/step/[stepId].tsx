import styled from '@emotion/styled';
import HeaderLayout from '@/components/layout/HeaderLayout';
import FeatureInfoSection from '@/components/roadmap/PeopleTIL/FeatureInfoSection';
import PeopleTILSection from '@/components/roadmap/PeopleTIL/PeopleTILSection';
import { setLayout } from '@/utils/layout';

const PeopleTil = () => {
  return (
    <>
      <Root>
        <Inner>
          <FeatureInfoSection />
          {/* <PeopleTILSection /> */}
          {/* <PeopleTILSection.Skeleton /> */}
          <PeopleTILSection.Fallback />
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
