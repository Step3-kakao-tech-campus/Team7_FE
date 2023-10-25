import Button from '@/components/common/Button';
import Typer from '@/components/main/Guest/Typer';
import * as Styled from './style';

const shineColorList = ['#EF4365'];

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const Guest = () => {
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

    </Styled.GuestRoot>
  );
};

export default Guest;
