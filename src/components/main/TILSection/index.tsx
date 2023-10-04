import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import TIL from '@/components/main/TIL';
import { useGetTils } from '@/hooks/queries/til';
import * as Styled from './style';

const TILSection = () => {
  const { tils, isLoading } = useGetTils({ page: 0 });

  return (
    <Styled.Root>
      <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
        {tils.map((til, index) => {
          return <TIL til={til} key={index} />;
        })}
      </CustomSuspense>
    </Styled.Root>
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
