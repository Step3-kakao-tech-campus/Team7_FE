import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Responsive from '@/components/common/Responsive';
import GuestGNB from '@/components/gnb/GuestGNB';
import FeatureSection from '@/components/main/Guest/FeatureSection';
import * as SectionStyled from '@/components/main/Guest/FeatureSection/style';
import Typer from '@/components/main/Guest/Typer';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

const Guest = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GuestGNB />
      <Styled.Root>
        <Styled.LeftTopGradientContainer>
          <Styled.LeftTopGradient />
        </Styled.LeftTopGradientContainer>

        <Styled.RightBottomGradientContainer>
          <Styled.RightBottomGradient />
        </Styled.RightBottomGradientContainer>

        <Styled.TyperBox>
          <div>꾸준하고픈 개발자의</div>
          <Typer
            sequence={[
              [{ text: '모든 단계를 ' }, { text: '기록', style: { color: '#EF4365' } }, { text: '하는 공간' }],
              [{ text: '모든 단계를 ' }, { text: '공유', style: { color: '#EF4365' } }, { text: '하는 공간' }],
              [{ text: '목표를 ' }, { text: '성취', style: { color: '#EF4365' } }, { text: '하는 공간' }],
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

        <Responsive device="desktop">
          <Styled.SubTitle>
            <div>TIL-y 에서 학습 방향성을 제공받고 공유하며 성장해보세요.</div>
          </Styled.SubTitle>
        </Responsive>

        <Responsive device="mobile">
          <Styled.SubTitle>
            <div>TIL-y 에서 학습 방향성을</div>
            <div>제공받고 공유하며 성장해보세요.</div>
          </Styled.SubTitle>
        </Responsive>

        <Styled.ButtonContainer onClick={() => router.push(TILY_LINKS.verify())}>
          <Button css={Styled.ButtonStyles}>Get Started</Button>
        </Styled.ButtonContainer>

        <SectionStyled.FeatureSection>
          <SectionStyled.HardWareContainer>
            <SectionStyled.Image src="/assets/images/landing1.png" alt="TIL-y" />
          </SectionStyled.HardWareContainer>
        </SectionStyled.FeatureSection>

        {SECTIONS.map((section) => {
          return <FeatureSection key={section.key} title={section.title} alt={section.alt} imgsrc={section.imgsrc} />;
        })}

        <SectionStyled.FeatureSection>
          <SectionStyled.SectionTitle>이 모든것을 TIL-y 에서</SectionStyled.SectionTitle>
          <Styled.ButtonContainer>
            <Button css={Styled.StartButtonStyles} onClick={() => router.push(TILY_LINKS.verify())}>
              시작하기
            </Button>
          </Styled.ButtonContainer>
        </SectionStyled.FeatureSection>
      </Styled.Root>
      <Footer />
    </>
  );
};

export default Guest;

const SECTIONS = [
  {
    key: 'roadmap',
    title: '개발공부의 방향성 제시',
    imgsrc: '/assets/images/roadmap.gif',
    alt: '개발공부의 방향성 제시',
  },
  {
    key: 'github',
    title: 'TIL 깃허브 업로드',
    imgsrc: '/assets/images/github.gif',
    alt: 'TIL 깃허브 업로드',
  },
  {
    key: 'share',
    title: '동일 주제에 대한 TIL 공유 기능',
    imgsrc: '/assets/images/peopleTIL.gif',
    alt: '동일 주제에 대한 TIL 공유 기능',
  },
  {
    key: 'group',
    title: '그룹 로드맵 생성',
    imgsrc: '/assets/images/group.gif',
    alt: '그룹 로드맵 생성',
  },
  {
    key: 'team',
    title: '팀 내 학습 관리',
    imgsrc: '/assets/images/team.gif',
    alt: '팀 내 학습 관리',
  },
];
