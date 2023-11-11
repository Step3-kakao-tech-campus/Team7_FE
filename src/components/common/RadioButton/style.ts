import Image from 'next/image';
import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;

  & > input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
`;

export const Container = styled.div<{ textSize: number }>`
  position: relative;
  top: 1.4px;
  width: ${({ textSize }) => `${textSize * 1.5}rem`};
  height: ${({ textSize }) => `${textSize * 1.5}rem`};
`;

export const EmptyRadio = styled(Image)``;

export const ActiveRadio = styled(Image)``;

export const RadioButtonText = styled.span<{ textPosition: string; textSize: number }>`
  font-size: ${({ textSize }) => `${textSize}rem`};
  margin-left: ${({ textPosition }) => (textPosition === 'right' ? '0.2rem' : '0')};
  margin-right: ${({ textPosition }) => (textPosition === 'left' ? '0.2rem' : '0')};
`;
