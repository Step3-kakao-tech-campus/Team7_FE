import Image from 'next/image';
import type { Til } from '@/api/type';
import CustomSuspense from '@/components/common/CustomSuspense';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
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
          {tils.length === 0 ? (
            <TILSection.Empty />
          ) : (
            <>
              {tils.map((til, index) => {
                return <TIL til={til} key={index} />;
              })}
            </>
          )}
        </CustomSuspense>
      </Styled.Container>
    </Styled.Root>
  );
};

export default TILSection;

TILSection.Empty = function () {
  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="다른 사람의 TIL이 없습니다." />
      <Styled.Description>
        <span>작성된 TIL이 없습니다</span>
        <span>TIL 를 작성하고 학습 히스토리를 남겨보세요!</span>
      </Styled.Description>
    </Styled.EmptyRoot>
  );
};

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

TILSection.Fallback = function (props: ErrorBoundaryProps) {
  const { resetErrorBoundary } = props;

  return (
    <Styled.EmptyRoot>
      <Fallback
        onClick={() => {
          resetErrorBoundary();
        }}
      />
    </Styled.EmptyRoot>
  );
};
