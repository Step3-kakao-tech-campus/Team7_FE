import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import * as Styled from './style';

const Input = (props: PropsWithChildren) => {
  const { children } = props;
  return <Styled.Root>{children}</Styled.Root>;
};

export interface LabelProps {
  className?: string;
}

Input.Label = function Label(props: PropsWithChildren<LabelProps>) {
  const { children, className } = props;

  return <Styled.Label className={className}>{children}</Styled.Label>;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  status?: 'error' | 'default';
  className?: string;
}

Input.InputField = function InputField(props: InputProps) {
  const { status = 'default', className, ...rest } = props;

  return <Styled.InputField className={className} status={status} {...rest} />;
};

export interface MessageProps {
  className?: string;
}

Input.Message = function Message(props: PropsWithChildren<MessageProps>) {
  const { children } = props;

  return <Styled.Message>{children}</Styled.Message>;
};

export default Input;
