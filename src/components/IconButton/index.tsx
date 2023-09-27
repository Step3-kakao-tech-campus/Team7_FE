import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import type { ButtonProps } from '@/components/Button';
import Button from '@/components/Button';

type IconButtonProps = Omit<ButtonProps, 'isLoading' | 'loadingWidth' | 'loadingHeight'> & {
  iconName: string;
  imageWidth?: number;
  imageHeight?: number;
};

const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  const { children, iconName, imageWidth = 16, imageHeight = 16, ...rest } = props;

  const extension = '.svg';

  return (
    <Button {...rest}>
      <Container>
        <Image src={`/assets/icons/${iconName}${extension}`} alt="icon" width={imageWidth} height={imageHeight} />
      </Container>
      {children}
    </Button>
  );
};

export default IconButton;

const Container = styled.div`
  margin-right: 6px;
`;
