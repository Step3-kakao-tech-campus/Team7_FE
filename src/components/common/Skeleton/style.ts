import styled from '@emotion/styled';
import type { SkeletonProps } from '@/components/common/Skeleton';

export const Skeleton = styled.div<SkeletonProps>`
  border-radius: ${({ type }) => (type === 'box' ? '0.4rem' : '100%')};
  background-color: ${({ theme }) => theme.colors.gray_200};
  overflow: hidden;
`;

export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  filter: blur(6px);
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-150%) skewX(-30deg);
    }
    50% {
      transform: translateX(-60%) skewX(-30deg);
    }
    100% {
      transform: translate(150%) skewX(-30deg);
    }
  }
`;
