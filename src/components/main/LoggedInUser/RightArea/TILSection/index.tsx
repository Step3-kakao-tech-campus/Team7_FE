import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetTilsQuery } from '@/api/hooks/til';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import EmptyList from '@/components/common/EmptyList';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import TILModal from '@/components/gnb/UserGNB/desktop/TILModal';
import MobileTILModal from '@/components/gnb/UserGNB/mobile/MobileTILModal';
import SearchBar from '@/components/main/LoggedInUser/LeftSideBar/SearchBar';
import TIL from '@/components/main/LoggedInUser/RightArea/TILSection/TIL';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const TILSection = () => {
  const router = useRouter();
  const { ref, isVisible } = useIntersectionObserver();
  const { tils, isLoading, fetchNextPage, hasNextPage } = useGetTilsQuery({ queryKey: [router.query] });
  const { isOpen, handleOpen, handleClose } = useModalState();

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage, ref]);

  return (
    <>
      <Styled.Root>
        <Responsive device="mobile">
          <SearchBar />
        </Responsive>
        <ConditionalRender
          data={tils}
          EmptyUI={
            <EmptyList
              image="ic_peopleTILEmpty"
              button="TIL 작성하기"
              onClick={() => handleOpen()}
              imageHeight={150}
              imageWidth={200}>
              <p>작성된 TIL이 없습니다</p>
              <p>새로운 TIL을 작성해보세요!</p>
            </EmptyList>
          }>
          <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
            <Styled.Container>
              <>
                {tils.map((til, index) => {
                  return <TIL til={til} key={index} />;
                })}
              </>
            </Styled.Container>
          </CustomSuspense>
        </ConditionalRender>
      </Styled.Root>
      <Styled.ObserverInterSectionTarget ref={ref} />
      <Responsive device="desktop">
        <TILModal isOpen={isOpen} onClose={handleClose} />
      </Responsive>
      <Responsive device="mobile">
        <MobileTILModal isOpen={isOpen} onClose={handleClose} />
      </Responsive>
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
