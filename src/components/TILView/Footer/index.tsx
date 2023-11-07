import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Styled from '@/components/TILWrite/TILWriteSection/Footer/style';
import Button from '@/components/common/Button';
import TILY_LINKS from '@/constants/links';

const Footer = () => {
  const router = useRouter();

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.push(TILY_LINKS.home())}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.Container>
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
      </Styled.Container>
    </Styled.Root>
  );
};

export default Footer;
