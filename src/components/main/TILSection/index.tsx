import type { Til } from '@/api/til/type';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import TIL from '@/components/main/TIL';
import * as Styled from './style';

interface TILSectionProps {
  tils: Til[];
  isLoading: boolean;
}

const TILSection = (props: TILSectionProps) => {
  const { tils, isLoading } = props;

  return (
    <Styled.Root>
      <Styled.Container>
        <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
          {tils.map((til, index) => {
            return <TIL til={til} key={index} />;
          })}
        </CustomSuspense>
      </Styled.Container>
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
