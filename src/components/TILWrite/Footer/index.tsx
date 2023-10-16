import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import { useSubmitTil } from '@/api/hooks/til';
import SubmitModal from '@/components/TILWrite/SubmitModal';
import Button from '@/components/common/Button';
import { tilyLinks } from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface FooterProps {
  TILContent: string;
}

const Footer = (props: FooterProps) => {
  const { TILContent } = props;

  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { patchTil } = usePatchTil();
  const { submitTil } = useSubmitTil();
  const { tilDetail } = useGetTil({
    roadmapId: router.query.roadmapId as string,
    stepId: router.query.stepId as string,
    tilId: router.query.tilId as string,
  });

  const handleSaveTIL = () => {
    if (!tilDetail) return;

    patchTil({
      roadmapId: router.query.roadmapId as string,
      stepId: router.query.stepId as string,
      tilId: router.query.tilId as string,
      content: TILContent,
      title: tilDetail?.step.title,
    });
  };

  const handleSubmitTIL = () => {
    submitTil({
      roadmapId: router.query.roadmapId as string,
      stepId: router.query.stepId as string,
      tilId: router.query.tilId as string,
      title: 'title',
      content: 'content',
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.push(tilyLinks.home())}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.Container>
        {tilDetail?.isPersonal === false && (
          <>
            {tilDetail?.isCompleted === false ? (
              <Button variant="primary" css={Styled.ButtonStyles} onClick={handleOpen}>
                제출
              </Button>
            ) : (
              <Button
                css={Styled.ButtonStyles}
                onClick={() =>
                  router.push(
                    tilyLinks.peopleTil({
                      roadmapId: Number(router.query.roadmapId) as number,
                      stepId: Number(router.query.stepId) as number,
                    }),
                  )
                }>
                다른 사람 TIL 보기
              </Button>
            )}
          </>
        )}
        <Button css={Styled.ButtonStyles} onClick={handleSaveTIL}>
          저장
        </Button>
      </Styled.Container>
      <SubmitModal isOpen={isOpen} handleClose={handleClose} handleSubmitTIL={handleSubmitTIL} />
    </Styled.Root>
  );
};

export default Footer;
