import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import type { ButtonProps } from '@/components/common/Button';
import Button from '@/components/common/Button';

type IconButtonProps = Omit<ButtonProps, 'isLoading' | 'loadingWidth' | 'loadingHeight'> & {
  iconName: string;
  imageWidth?: number;
  imageHeight?: number;
};

const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  const { children, iconName, imageWidth = 16, imageHeight = 16, ...rest } = props;

  return (
    <Button {...rest}>
      <Container>
        <Image src={`/assets/icons/${iconName}.svg`} alt="icon" width={imageWidth} height={imageHeight} />
      </Container>
      {children}
    </Button>
  );
};

export default IconButton;

const Container = styled.div`
  margin-right: 0.4rem;
`;
