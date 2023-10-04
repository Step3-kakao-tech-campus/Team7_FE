import { useEffect } from 'react';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import TIL from '@/components/main/TIL';
import { useIntersectionObserver } from '@/hooks/common/useInterSectionObserver';
import { useGetTils } from '@/hooks/queries/til';
import * as Styled from './style';

const TILSection = () => {
  const { tils, isLoading, fetchNextPage } = useGetTils({});

  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage]);

  return (
    <>
      <Styled.Root>
        <Styled.Container>
          <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
            {tils.map((til, index) => {
              return <TIL til={til} key={index} />;
            })}
          </CustomSuspense>
        </Styled.Container>
      </Styled.Root>
      <Styled.Target ref={ref} />
    </>
  );
};

export default TILSection;

const SKELETON_COUNT = 9;

TILSection.Skeleton = function () {
  return (
    <>
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Skeleton key={index} css={Styled.SkeletonStyles} />
      ))}
    </>
  );
};
