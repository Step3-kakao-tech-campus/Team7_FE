import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const FeatureSection = styled(motion.section)`
  margin-top: 10rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: 700;
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 40px;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    font-size: 32px;
  }

  @media ${({ theme }) => theme.mediaQuery.xs} {
    font-size: 24px;
  }
`;

export const HardWareContainer = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
  padding: 22px;
  background-color: #000000;
  border-radius: 20px;
  border: 1px solid #d2d3d4;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 14px;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding: 8px;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
