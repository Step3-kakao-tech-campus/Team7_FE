import * as Styled from './style';

export interface ToastProps {
  message: string;
  isError?: boolean;
}

const Toast = (props: ToastProps) => {
  const { message, isError = false } = props;

  return <Styled.Root isError={isError}>{message}</Styled.Root>;
};

export default Toast;
