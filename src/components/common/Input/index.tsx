import { motion } from 'framer-motion';
import { forwardRef, type LegacyRef, type InputHTMLAttributes } from 'react';
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
  onBlur?: () => void;
}

const Input = forwardRef((props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
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
    onBlur,
    ...rest
  } = props;

  return (
    <Styled.Label>
      {label && <Styled.LabelText labelType={labelType}>{label}</Styled.LabelText>}
      <Styled.InputContainer className={className} status={status} disabled={disabled}>
        <Styled.Input {...rest} css={inputStyles} disabled={disabled} onBlur={onBlur} ref={ref} />
        {endIcon && (
          <Styled.ButtonContainer onClick={() => onClick?.()}>
            <Image src={`/assets/icons/${endIcon}.svg`} alt="검색" width={24} height={24} />
          </Styled.ButtonContainer>
        )}
      </Styled.InputContainer>
      {status === 'error' && message && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ ease: 'easeOut', duration: 0.2 }}>
          <Styled.Message>{message}</Styled.Message>
        </motion.div>
      )}
    </Styled.Label>
  );
});

export default Input;
