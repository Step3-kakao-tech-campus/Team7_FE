import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import * as Styled from './style';

const InputField = (props: PropsWithChildren) => {
  const { children } = props;
  return <Styled.Root>{children}</Styled.Root>;
};

export interface LabelProps {
  className?: string;
}

InputField.Label = function Label(props: PropsWithChildren<LabelProps>) {
  const { children, className } = props;

  return <Styled.LabelText className={className}>{children}</Styled.LabelText>;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  status?: 'error' | 'default';
  className?: string;
}

InputField.Input = function Input(props: InputProps) {
  const { status = 'default', className, ...rest } = props;

  return <Styled.Input className={className} status={status} {...rest} />;
};

export interface MessageProps {
  className?: string;
}

InputField.Message = function Message(props: PropsWithChildren<MessageProps>) {
  const { children } = props;

  return <Styled.Message>{children}</Styled.Message>;
};

export default InputField;
