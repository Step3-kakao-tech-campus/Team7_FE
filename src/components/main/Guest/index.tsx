import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import FeatureSection from '@/components/main/Guest/FeatureSection';
import * as SectionStyled from '@/components/main/Guest/FeatureSection/style';
import Typer from '@/components/main/Guest/Typer';
import { tilyLinks } from '@/constants/links';
import * as Styled from './style';

const Guest = () => {
  const router = useRouter();

  return (
    <>
      <Styled.GuestRoot>
        <Styled.GuestGradientContainer>
          <Styled.GuestGradient />
        </Styled.GuestGradientContainer>

        <Styled.GuestGradientContainer2>
          <Styled.GuestGradient2 />
        </Styled.GuestGradientContainer2>

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
        <Styled.SubTitle>
          <div>TIL-y 에서 학습 방향성을 제공받고 공유하며 성장해보세요.</div>
        </Styled.SubTitle>

        <Styled.ButtonContainer onClick={() => router.push(tilyLinks.verify())}>
          <Button css={Styled.ButtonStyles}>Get Started</Button>
        </Styled.ButtonContainer>

        <Styled.IntroSection>
          <SectionStyled.HardWareContainer>
            <Image src="/assets/images/landing1.png" alt="TIL-y" width={980} height={540} />
          </SectionStyled.HardWareContainer>
        </Styled.IntroSection>

        <FeatureSection title="개발공부의 방향성 제시" width={980} height={540} />
        <FeatureSection title="TIL 깃허브 업로드" width={980} height={540} />
        <FeatureSection title="동일 주제에 대한 TIL 공유 기능" width={980} height={540} />
        <FeatureSection title="그룹 로드맵 생성" width={980} height={540} />
        <FeatureSection title="팀 내 학습 관리" width={980} height={540} />

        <SectionStyled.FeatureSection>
          <SectionStyled.SectionTitle>이 모든것을 TIL-y 에서</SectionStyled.SectionTitle>
          <Styled.ButtonContainer>
            <Button css={Styled.StartButtonStyles} onClick={() => router.push(tilyLinks.verify())}>
              시작하기
            </Button>
          </Styled.ButtonContainer>
        </SectionStyled.FeatureSection>
      </Styled.GuestRoot>
      <Footer />
    </>
  );
};

export default Guest;
