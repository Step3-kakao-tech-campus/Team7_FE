import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import type { ButtonProps } from '@/components/common/Button';
import Button from '@/components/common/Button';

interface IconButtonProps extends Omit<ButtonProps, 'isLoading' | 'loadingWidth' | 'loadingHeight'> {
  iconPosition?: 'left' | 'right';
  iconName: string;
  imageSize?: number;
  rotate?: boolean;
}

const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  const { children, iconPosition = 'left', iconName, imageSize = 16, rotate = false, ...rest } = props;

  const renderImage = (position: 'left' | 'right') => {
    if (iconPosition === position) {
      return (
        <Container rotate={rotate}>
          <Image src={`/assets/icons/${iconName}.svg`} alt="icon" width={imageSize} height={imageSize} />
        </Container>
      );
    }
    return null;
  };

  return (
    <Button {...rest}>
      {renderImage('left')}
      {children}
      {renderImage('right')}
    </Button>
  );
};

export default IconButton;

const Container = styled.div<{ rotate: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 3px;

  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
