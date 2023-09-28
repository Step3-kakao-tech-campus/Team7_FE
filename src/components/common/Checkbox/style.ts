import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CheckboxProps } from '@/components/common/Checkbox';
import Flex from '@/components/common/Flex';

export const Label = styled.label`
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
`;

export const Checkbox = styled.span<CheckboxProps>`
  ${({ theme, checked, textSize }) => css`
    position: relative;
    transition: 0.1s background-color;
    border-radius: 4px;
    border: 1px solid ${theme.colors.black};
    background-color: transparent;
    width: ${textSize}rem;
    height: ${textSize}rem;
    box-shadow:
      0px 1px 3px 0px rgba(16, 24, 40, 0.1),
      0px 1px 2px -1px rgba(0, 0, 0, 0.1);

    ${checked &&
    css`
      background-color: ${theme.colors.black};
    `}
  `}
`;

export const CheckboxImage = styled(Image)`
  border-radius: 10px;
`;

export const CheckboxText = styled(Flex)<{ textSize: number }>`
  font-size: ${({ textSize }) => `${textSize}rem`};
  font-weight: 700;
  margin-left: 0.375em;
`;
