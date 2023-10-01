import * as Styled from './style';

export interface ToastProps {
  message: string;
}

const Toast = (props: ToastProps) => {
  const { message } = props;

  return <Styled.Root>{message}</Styled.Root>;
};

export default Toast;
