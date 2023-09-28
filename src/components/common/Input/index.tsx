import type { InputHTMLAttributes } from 'react';
import * as Styled from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  status?: 'error' | 'default';
  message?: string;
  labelType?: 'bold' | 'regular';
  cssProps?: string;
}

const Input = (props: InputProps) => {
  const { label, status = 'default', message, labelType, cssProps, ...rest } = props;
  return (
    <Styled.Label>
      {label && <Styled.LabelText labelType={labelType}>{label}</Styled.LabelText>}
      <Styled.Input className={cssProps} status={status} {...rest} />
      {message && <Styled.Message>{message}</Styled.Message>}
    </Styled.Label>
  );
};

export default Input;
