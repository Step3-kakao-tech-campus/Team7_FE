import type { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import * as Styled from './style';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  status?: 'error' | 'default';
  message?: string;
  cssProps?: string;
}

const Input = (props: Props) => {
  const { label, status = 'default', message, cssProps, ...rest } = props;
  return (
    <Styled.Label>
      {label && <Styled.LabelText>{label}</Styled.LabelText>}
      <Styled.Input className={cssProps} status={status} {...rest} />
      {message && <Styled.Message>{message}</Styled.Message>}
    </Styled.Label>
  );
};

export default Input;
