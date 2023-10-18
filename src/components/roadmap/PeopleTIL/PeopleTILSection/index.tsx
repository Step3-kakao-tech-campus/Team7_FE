import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStepTils } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Fallback from '@/components/common/Fallback';
import Skeleton from '@/components/common/Skeleton';
import TIL from '@/components/roadmap/PeopleTIL/TIL';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const PeopleTILSection = () => {
  const { query } = useRouter();
  const { memberTils, isLoading } = useStepTils({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
  });

  return (
    <CustomSuspense isLoading={isLoading} fallback={<PeopleTILSection.Skeleton />}>
      {memberTils?.length === 0 ? (
        <PeopleTILSection.Empty />
      ) : (
        <Styled.Root>
          <Styled.Title>다른 사람의 TIL 보기</Styled.Title>
          <Styled.Container>
            {memberTils?.map((til) => (
              <TIL
                key={til.tilId}
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
      )}
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

        <Button css={Styled.ButtonStyles} onClick={() => router.push(tilyLinks.home())}>
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

PeopleTILSection.Fallback = function _Fallback({ error, resetErrorBoundary }) {
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
