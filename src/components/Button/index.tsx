import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import * as S from './style';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'default';
  round?: number;
  px?: number;
  py?: number;
  fullWidth?: boolean;
  fontSize?: number;
  className?: string;
}

const Button = (props: PropsWithChildren<Props>) => {
  const {
    variant = 'default',
    round = 6,
    fullWidth = false,
    px = 1,
    py = 0.5,
    children,
    fontSize = 1,
    className,
    ...rest
  } = props;

  return (
    <S.Button
      variant={variant}
      round={round}
      px={px}
      py={py}
      fullWidth={fullWidth}
      className={className}
      fontSize={fontSize}
      {...rest}>
      {children}
    </S.Button>
  );
};

export interface ButtonImageProps extends ImageProps {
  className?: string;
  width?: number;
  height?: number;
}

Button.Image = function ButtonImage(props: ButtonImageProps) {
  const { alt = '', width = 16, height = 16, className, ...rest } = props;

  return (
    <S.ImageContainer className={className}>
      <Image width={width} height={height} {...rest} alt={alt} />
    </S.ImageContainer>
  );
};
export interface ButtonTextProps {
  className?: string;
  fontSize?: number;
}

Button.Text = function ButtonText(props: PropsWithChildren<ButtonTextProps>) {
  const { children, className } = props;

  return <S.Text className={className}>{children}</S.Text>;
};

export default Button;
