import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Flex from '@/components/Flex';
import Spinner from '@/components/Spinner';
import type { ButtonStyle } from './style';
import { buttonStyles } from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonStyle;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingWidth?: number;
  loadingHeight?: number;
  className?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    variant = 'default',
    fullWidth = false,
    isLoading = false,
    loadingWidth = 16,
    loadingHeight = 16,
    children,
    className,
    ...rest
  } = props;

  return (
    <StyledButton variant={variant} fullWidth={fullWidth} className={className} {...rest}>
      <Flex align="center" justify="center">
        {isLoading && <Spinner width={loadingWidth} height={loadingHeight} />}
        {children}
      </Flex>
    </StyledButton>
  );
};

export default Button;

type StyledButtonProps = Required<Pick<ButtonProps, 'variant' | 'fullWidth'>>;

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 16px;
  cursor: pointer;
  ${({ variant, theme }) => buttonStyles[variant](theme)}

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray_700};
  }
`;
