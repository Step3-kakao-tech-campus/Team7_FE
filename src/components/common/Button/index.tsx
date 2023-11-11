import { type ButtonHTMLAttributes, type PropsWithChildren, forwardRef } from 'react';
import Spinner from '@/components/common/Spinner';
import * as Styled from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'default';
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingWidth?: number;
  loadingHeight?: number;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  const {
    variant = 'default',
    fullWidth = false,
    isLoading = false,
    loadingWidth = 1,
    loadingHeight = 1,
    children,
    className,
    ...rest
  } = props;

  return (
    <Styled.Button
      variant={variant}
      fullWidth={fullWidth}
      isLoading={isLoading}
      className={className}
      ref={ref}
      {...rest}>
      {isLoading && <Spinner width={loadingWidth} height={loadingHeight} />}
      {children}
    </Styled.Button>
  );
});

export default Button;
