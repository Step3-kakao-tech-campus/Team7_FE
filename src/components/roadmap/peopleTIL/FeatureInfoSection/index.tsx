import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

const FeatureInfoSection = () => {
  const router = useRouter();

  return (
    <Styled.Root>
      <Card css={Styled.LeftCardStyles}>
        <Styled.Container>
          <div>공부 방향에 대한 고민이 있는 분들께 드리는 TIL-y의 로드맵!</div>
          <Button css={Styled.ButtonStyles} onClick={() => router.push(TILY_LINKS.roadmap())}>
            바로 가기
          </Button>
        </Styled.Container>
      </Card>

      <Card css={Styled.RightCardStyles}>
        <Styled.Container>
          <div>TIL-y 에서 공부한 내용을 공개하세요. 깃허브 자동 업로드 기능!</div>
          <Link href="https://zinc-lyre-886.notion.site/c841d91617134426a4ec38535574acfd?pvs=4" target="_blank">
            <Button css={Styled.ButtonStyles}>바로 가기</Button>
          </Link>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default FeatureInfoSection;
