import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GuestRoot = styled.div`
  height: 150vh;
  max-width: 1024px;
  margin: 0 auto;
`;

export const GuestGradientContainer = styled.div`
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

export const GuestGradient = styled.div`
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

export const TyperBox = styled.h1`
  margin-top: 8rem;

  white-space: pre-wrap;
  color: black;
  text-align: center;
  font-size: 4.5rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
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

export const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

export const UseRoadmapSection = styled(motion.section)`
  margin-top: 10rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
`;

export const HardWareContainer = styled.div`
  margin-top: 2rem;
  padding: 22px;
  background-color: #000000;
  border-radius: 20px;
  border: 1px solid #d2d3d4;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
