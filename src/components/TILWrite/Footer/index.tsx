import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import IconButton from '@/components/common/IconButton';
import * as Styled from './style';

const Footer = () => {
  const router = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: router.query.roadmapId as string,
    stepId: router.query.stepId as string,
    tilId: router.query.tilId as string,
  });

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
        <Button css={Styled.ButtonStyles}>저장</Button>
      </Styled.Container>
    </Styled.Root>
  );
};

export default Footer;
