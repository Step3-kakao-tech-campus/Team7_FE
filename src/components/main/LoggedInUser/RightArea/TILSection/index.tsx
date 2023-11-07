import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTilsParam } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
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
  const { tils, isLoading, fetchNextPage, hasNextPage } = useGetTilsParam({ queryKey: [router.query] });

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage, ref]);

  return (
    <ConditionalRender data={tils} EmptyUI={<EmptyTilSection />}>
      <Styled.Root>
        <Responsive device="mobile">
          <SearchBar />
        </Responsive>
        <CustomSuspense isLoading={isLoading} fallback={<TILSection.Skeleton />}>
          <Styled.Container>
            <>
              {tils.map((til, index) => {
                return <TIL til={til} key={index} />;
              })}
            </>

            <Styled.ObserverInterSectionTarget ref={ref} />
          </Styled.Container>
        </CustomSuspense>
      </Styled.Root>
    </ConditionalRender>
  );
};

export default TILSection;

export const EmptyTilSection = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <Styled.EmptyRoot>
      <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="작성된 TIL이 없습니다." />
      <Styled.Description>
        <span>작성된 TIL이 없습니다</span>
        <span>새로운 TIL을 작성해보세요!</span>
        <Button onClick={handleOpen}>TIL 작성하기</Button>
      </Styled.Description>
      <Responsive device="desktop">
        <TILModal isOpen={isOpen} onClose={handleClose} />
      </Responsive>
      <Responsive device="mobile">
        <MobileTILModal isOpen={isOpen} onClose={handleClose} />
      </Responsive>
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
