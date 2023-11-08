import { useRouter } from 'next/router';
import { useGetTils } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

interface SubmitButtonProps {
  handleOpen: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { handleOpen } = props;

  const router = useRouter();

  const { tilDetail, isLoading } = useGetTils({
    tilId: Number(router.query.tilId),
  });

  return (
    <CustomSuspense fallback={<SkeletonButton />} isLoading={isLoading}>
      {!tilDetail?.isPersonal && (
        <>
          {tilDetail?.isSubmit ? (
            <Button
              css={Styled.ButtonStyles}
              onClick={() =>
                router.push(
                  TILY_LINKS.peopleTil({
                    roadmapId: Number(router.query.roadmapId) as number,
                    stepId: Number(router.query.stepId) as number,
                  }),
                )
              }>
              다른 사람 TIL 보기
            </Button>
          ) : (
            <Button variant="primary" css={Styled.ButtonStyles} onClick={handleOpen}>
              제출
            </Button>
          )}
        </>
      )}
    </CustomSuspense>
  );
};

export default SubmitButton;

const SkeletonButton = () => {
  return <Skeleton css={Styled.SkeletonStyles} />;
};
