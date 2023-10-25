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

