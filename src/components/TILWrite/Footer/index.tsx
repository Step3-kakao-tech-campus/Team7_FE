import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import { useSubmitTil } from '@/api/hooks/til';
import SubmitModal from '@/components/TILWrite/SubmitModal';
import Button from '@/components/common/Button';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import type { AutoSaveTime } from '@/pages/TILWrite/roadmap/[roadmapId]/step/[stepId]/til/[tilId]';
import * as Styled from './style';

interface FooterProps {
  TILContent: string;
  autoSaveTime: AutoSaveTime;
}

const Footer = (props: FooterProps) => {
  const { TILContent, autoSaveTime } = props;

  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { patchTil } = usePatchTil();
  const { submitTil } = useSubmitTil();
  const { tilDetail, isLoading } = useGetTil({
    roadmapId: Number(router.query.roadmapId),
    stepId: Number(router.query.stepId),
    tilId: Number(router.query.tilId),
  });

  const handleSaveTIL = () => {
    if (!tilDetail) return;

    patchTil({
      roadmapId: Number(router.query.roadmapId),
      stepId: Number(router.query.stepId),
      tilId: Number(router.query.tilId),
      content: TILContent,
    });
  };

  const handleSubmitTIL = () => {
    submitTil({
      roadmapId: Number(router.query.roadmapId),
      stepId: Number(router.query.stepId),
      tilId: Number(router.query.tilId),
      content: TILContent,
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.push(TILY_LINKS.home())}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.Container>
        {autoSaveTime.active && (
          <Styled.AutoSaveTime>
            <span>자동 저장 완료</span>
            <span>{dayjs(autoSaveTime.time).format('HH:mm:ss')}</span>
          </Styled.AutoSaveTime>
        )}
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
        <Button css={Styled.ButtonStyles} onClick={handleSaveTIL}>
          저장
        </Button>
      </Styled.Container>
      <SubmitModal isOpen={isOpen} handleClose={handleClose} handleSubmitTIL={handleSubmitTIL} />
    </Styled.Root>
  );
};

export default Footer;

const SkeletonButton = () => {
  return <Skeleton css={Styled.SkeletonStyles} />;
};
