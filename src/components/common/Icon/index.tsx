import type { MouseEventHandler } from 'react';
import Image from 'next/image';
import * as Styled from './style';

interface IconProps {
  imageSize: number;
  className?: string;
  iconName: string;
  ext: 'png' | 'svg';
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Icon = (props: IconProps) => {
  const { iconName, imageSize, className, ext, alt, onClick } = props;

  return (
    <Styled.Root className={className} onClick={onClick}>
      <Image src={`/assets/icons/${iconName}.${ext}`} width={imageSize} height={imageSize} alt={alt} />
    </Styled.Root>
  );
};

export default Icon;
