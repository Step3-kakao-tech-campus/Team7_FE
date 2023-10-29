import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const LeftTopGradientContainer = styled.div`
  position: absolute;
  inset: 0;
  top: -10rem;
  z-index: -10;
  overflow: hidden;
  filter: blur(64px);
  @media (min-width: 640px) {
    top: -20rem;
  }
`;

export const LeftTopGradient = styled.div`
  position: relative;
  left: calc(50% - 11rem);
  aspect-ratio: 1155 / 678;
  width: 36.125rem;
  transform: translateX(-50%) rotate(30deg);
  background: linear-gradient(to right, #ff80b5, #9089fc);
  opacity: 0.3;
  clip-path: polygon(
    74.1% 44.1%,
    100% 61.6%,
    97.5% 26.9%,
    85.5% 0.1%,
    80.7% 2%,
    72.5% 32.5%,
    60.2% 62.4%,
    52.4% 68.1%,
    47.5% 58.3%,
    45.2% 34.5%,
    27.5% 76.7%,
    0.1% 64.9%,
    17.9% 100%,
    27.6% 76.8%,
    76.1% 97.7%,
    74.1% 44.1%
  );

  @media (min-width: 640px) {
    left: calc(50% - 30rem);
    width: 72.1875rem;
  }
`;

export const RightBottomGradientContainer = styled.div`
  position: absolute;
  inset: 0;
  top: 25%;
  z-index: -10;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
  filter: blur(64px);
`;

export const RightBottomGradient = styled.div`
  position: relative;
  left: 0%;
  aspect-ratio: 1155 / 678;
  width: 36.125rem;
  transform: translateX(-50%);
  background: linear-gradient(to bottom right, #ff80b5, #9089fc);
  opacity: 0.3;
  clip-path: polygon(
    74.1% 44.1%,
    100% 61.6%,
    97.5% 26.9%,
    85.5% 0.1%,
    80.7% 2%,
    72.5% 32.5%,
    60.2% 62.4%,
    52.4% 68.1%,
    47.5% 58.3%,
    45.2% 34.5%,
    27.5% 76.7%,
    0.1% 64.9%,
    17.9% 100%,
    27.6% 76.8%,
    76.1% 97.7%,
    74.1% 44.1%
  );
  @media (min-width: 640px) {
    left: calc(67%);
    width: 72.1875rem;
  }
`;

export const TyperBox = styled.h1`
  margin-top: 8rem;

  white-space: pre-wrap;
  color: black;
  text-align: center;
  font-size: 4.5rem;
  line-height: 1.3;
  font-weight: 700;

  @media ${({ theme }) => theme.mediaQuery.md} {
    margin-top: 64px;
    font-size: 32px;
  }
`;

export const SubTitle = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const ButtonStyles = css`
  font-size: 1.2rem;
  border-radius: 20px;
  box-shadow:
    0 0.3259259164px 0.7333333492px 0 rgba(0, 0, 0, 0.12),
    0 1.5407407284px 2.8666665554px 0 rgba(0, 0, 0, 0.07),
    0 4px 9px 0 rgba(0, 0, 0, 0.05);
`;

export const StartButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const StartButtonStyles = css`
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow:
    0 0.3259259164px 0.7333333492px 0 rgba(0, 0, 0, 0.12),
    0 1.5407407284px 2.8666665554px 0 rgba(0, 0, 0, 0.07),
    0 4px 9px 0 rgba(0, 0, 0, 0.05);
`;

export const IntroSection = styled.section`
  margin-top: 10rem;
`;
