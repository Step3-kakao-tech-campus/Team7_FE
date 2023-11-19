import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetStepTils } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import ConditionalRender from '@/components/common/ConditionalRender';
import CustomSuspense from '@/components/common/CustomSuspense';
import Fallback from '@/components/common/Fallback';
import type { ErrorBoundaryProps } from '@/components/common/GlobalErrorBoundary';
import Skeleton from '@/components/common/Skeleton';
import TIL from '@/components/roadmap/peopleTIL/PeopleTILSection/TIL';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

const PeopleTILSection = () => {
  const { query } = useRouter();
  const { memberTils, isLoading } = useGetStepTils({
    stepId: Number(query.stepId),
  });

  return (
    <CustomSuspense isLoading={isLoading} fallback={<PeopleTILSection.Skeleton />}>
      <ConditionalRender data={memberTils} EmptyUI={<PeopleTILSection.Empty />}>
        <Styled.Root>
          <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
          <Styled.Container>
            {memberTils?.map((til, index) => (
              <TIL
                key={index}
                tilId={til.tilId}
                userId={til.userId}
                submitDate={til.submitDate}
                image={til.image}
                name={til.name}
                content={til.content}
                commentNum={til.commentNum}
              />
            ))}
          </Styled.Container>
        </Styled.Root>
      </ConditionalRender>
    </CustomSuspense>
  );
};

export default PeopleTILSection;

PeopleTILSection.Empty = function Empty() {
  const router = useRouter();

  return (
    <Styled.Root>
      <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
      <Styled.CardContainer>
        <Styled.ImageContainer>
          <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="다른 사람의 TIL이 없습니다." />
        </Styled.ImageContainer>

        <Styled.Description>
          <span>공개된 다른 TIL이 없습니다.</span>
        </Styled.Description>

        <Button css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.home())}>
          메인 페이지로 이동
        </Button>
      </Styled.CardContainer>
    </Styled.Root>
  );
};

PeopleTILSection.Skeleton = function _Skeleton() {
  return (
    <Styled.Root>
      <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
      <Styled.Container>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} css={Styled.SkeletonCardStyles} />
        ))}
      </Styled.Container>
    </Styled.Root>
  );
};

PeopleTILSection.Fallback = function _Fallback(props: ErrorBoundaryProps) {
  const { resetErrorBoundary } = props;

  return (
    <Styled.Root>
      <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
      <Styled.FallbackContainer>
        <Fallback
          onClick={() => {
            resetErrorBoundary();
          }}
        />
      </Styled.FallbackContainer>
    </Styled.Root>
  );
};
