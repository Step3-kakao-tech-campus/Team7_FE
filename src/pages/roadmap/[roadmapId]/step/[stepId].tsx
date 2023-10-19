import { Suspense, useId } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useStepTils } from '@/api/hooks/til';
import CustomSuspense from '@/components/common/CustomSuspense';
import HeaderLayout from '@/components/layout/HeaderLayout';
import FeatureInfoSection from '@/components/roadmap/PeopleTIL/FeatureInfoSection';
import PeopleTILSection from '@/components/roadmap/PeopleTIL/PeopleTILSection';
import { setLayout } from '@/utils/layout';

const PeopleTil = () => {
  const { query } = useRouter();

  const { isLoading } = useStepTils({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
  });

  return (
    <>
      <Root>
        <Inner>
          <FeatureInfoSection />
          <CustomSuspense isLoading={isLoading} fallback={<PeopleTILSection.Skeleton />}>
            <PeopleTILSection />
          </CustomSuspense>
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
