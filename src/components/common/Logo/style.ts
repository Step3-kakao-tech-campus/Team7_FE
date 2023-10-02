import styled from '@emotion/styled';
import type { LogoProps } from '@/components/common/Logo';

type TextProps = Pick<LogoProps, 'imageWidth'>;

export const Text = styled.p<TextProps>`
  font-weight: 700;
  font-size: ${({ imageWidth = 54 }) => `${imageWidth * 0.8}px`};
  margin-top: 0.3rem;
`;
