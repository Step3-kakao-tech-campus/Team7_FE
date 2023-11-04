import * as Styled from './style';

export interface ToastProps {
  message: string;
  isError?: boolean;
  position?: 'bottom' | 'right';
}

const Toast = (props: ToastProps) => {
  const { message, isError = false, position } = props;

  return (
    <Styled.Root isError={isError} position={position}>
      {message}
    </Styled.Root>
  );
};

export default Toast;
