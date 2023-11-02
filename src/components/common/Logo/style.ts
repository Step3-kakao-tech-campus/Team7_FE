import styled from '@emotion/styled';
import type { LogoProps } from '@/components/common/Logo';

type TextProps = Pick<LogoProps, 'imageSize'>;

export const Root = styled.div<{ isPointer: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${({ isPointer }) => isPointer && 'cursor: pointer'};

  @media ${({ theme }) => theme.mediaQuery.md} {
    gap: 8px;
  }
`;

export const Text = styled.p<TextProps>`
  font-weight: 700;
  font-size: ${({ imageSize = 54 }) => `${imageSize * 0.8}px`};

  @media ${({ theme }) => theme.mediaQuery.md} {
    min-width: fit-content;
  }
`;
