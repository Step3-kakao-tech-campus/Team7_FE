import type { InputHTMLAttributes } from 'react';
import Image from 'next/image';
import type { SerializedStyles } from '@emotion/react';
import type { EmotionTheme } from '@/styles/emotion';
import * as Styled from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  status?: 'error' | 'default';
  message?: string;
  labelType?: 'bold' | 'regular';
  disabled?: boolean;
  endIcon?: string;
  inputStyles?: (theme: EmotionTheme) => SerializedStyles;
  onClick?: () => void;
}

const Input = (props: InputProps) => {
  const {
    label,
    status = 'default',
    message,
    inputStyles,
    labelType,
    className,
    endIcon,
    disabled = false,
    onClick,
    ...rest
  } = props;

  return (
    <Styled.Label>
      {label && <Styled.LabelText labelType={labelType}>{label}</Styled.LabelText>}
      <Styled.InputContainer className={className} status={status} disabled={disabled}>
        <Styled.Input {...rest} css={inputStyles} disabled={disabled} />
        {endIcon && (
          <Styled.ButtonContainer onClick={() => onClick?.()}>
            <Image src={`/assets/icons/${endIcon}.svg`} alt="" width={24} height={24} />
          </Styled.ButtonContainer>
        )}
      </Styled.InputContainer>
      {message && <Styled.Message>{message}</Styled.Message>}
    </Styled.Label>
  );
};

export default Input;
