import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import IconButton from '@/components/common/IconButton';
import * as Styled from './style';

interface FooterProps {
  TILContent: string;
}

const Footer = (props: FooterProps) => {
  const { TILContent } = props;

  const router = useRouter();
  const { patchTil } = usePatchTil();
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

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.back()}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.Container>
        {tilDetail?.isPersonal === false && (
          <IconButton css={Styled.ButtonStyles} iconName="ic_lock" imageSize={18}>
            다른 사람 TIL 보기
          </IconButton>
        )}
        <Button css={Styled.ButtonStyles} onClick={handleSaveTIL}>
          저장
        </Button>
      </Styled.Container>
    </Styled.Root>
  );
};

export default Footer;
