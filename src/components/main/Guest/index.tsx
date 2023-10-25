import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Typer from '@/components/main/Guest/Typer';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const shineColorList = ['#EF4365'];

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const Guest = () => {
  const router = useRouter();

  return (
    <Styled.GuestRoot>
      <Styled.GuestGradientContainer>
        <Styled.GuestGradient />
      </Styled.GuestGradientContainer>

      <Styled.TyperBox>
        <div>꾸준하고픈 개발자의</div>
        <Typer
          sequence={[
            [{ text: '모든 단계를 ' }, { text: '기록', style: { color: shineColorList[0] } }, { text: '하는 공간' }],
            [{ text: '모든 단계를 ' }, { text: '공유', style: { color: shineColorList[0] } }, { text: '하는 공간' }],
            [{ text: '목표를 ' }, { text: '성취', style: { color: shineColorList[0] } }, { text: '하는 공간' }],
          ]}
          span={{
            fill: 1500,
            full: 1500,
            erase: 1000,
            empty: 300,
          }}
        />{' '}
        {/* 높이 유지용 빈칸 디폴트로 빈칸을 넣어놓았음 */}
      </Styled.TyperBox>
      <Styled.SubTitle>
        <div>TIL-y 에서 학습 방향성을 제공받고 공유하며 성장해보세요.</div>
      </Styled.SubTitle>

      <Styled.ButtonContainer onClick={() => router.push(tilyLinks.verify())}>
        <Button css={Styled.ButtonStyles}>Get Started</Button>
      </Styled.ButtonContainer>

      <Styled.IntroSection>
        <Styled.HardWareContainer>
          <Image src="/assets/images/landing1.png" alt="TIL-y" width={1024} height={600} />
        </Styled.HardWareContainer>
      </Styled.IntroSection>

      <Styled.UseRoadmapSection initial="hidden" whileInView="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Styled.SectionTitle>개발공부의 방향성 제시</Styled.SectionTitle>
        <Styled.HardWareContainer>
          <Image
            style={{ borderRadius: '10px' }}
            src="/assets/images/roadmap.gif"
            alt="TIL-y"
            width={980}
            height={540}
          />
        </Styled.HardWareContainer>
      </Styled.UseRoadmapSection>

      <Styled.UseRoadmapSection initial="hidden" whileInView="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Styled.SectionTitle>TIL 깃허브 업로드</Styled.SectionTitle>
        <Styled.HardWareContainer>
          <Image
            style={{ borderRadius: '10px' }}
            src="/assets/images/roadmap.gif"
            alt="TIL-y"
            width={980}
            height={540}
          />
        </Styled.HardWareContainer>
      </Styled.UseRoadmapSection>

      <Styled.UseRoadmapSection initial="hidden" whileInView="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Styled.SectionTitle>동일 주제에 대한 TIL 공유 기능</Styled.SectionTitle>
        <Styled.HardWareContainer>
          <Image
            style={{ borderRadius: '10px' }}
            src="/assets/images/roadmap.gif"
            alt="TIL-y"
            width={980}
            height={540}
          />
        </Styled.HardWareContainer>
      </Styled.UseRoadmapSection>

      <Styled.UseRoadmapSection initial="hidden" whileInView="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Styled.SectionTitle>그룹 로드맵 생성</Styled.SectionTitle>
        <Styled.HardWareContainer>
          <Image
            style={{ borderRadius: '10px' }}
            src="/assets/images/roadmap.gif"
            alt="TIL-y"
            width={980}
            height={540}
          />
        </Styled.HardWareContainer>
      </Styled.UseRoadmapSection>

      <Styled.UseRoadmapSection initial="hidden" whileInView="show" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Styled.SectionTitle>팀 내 학습 관리</Styled.SectionTitle>
        <Styled.HardWareContainer>
          <Image
            style={{ borderRadius: '10px' }}
            src="/assets/images/roadmap.gif"
            alt="TIL-y"
            width={980}
            height={540}
          />
        </Styled.HardWareContainer>
      </Styled.UseRoadmapSection>
    </Styled.GuestRoot>
  );
};

export default Guest;
