import Image from 'next/image';
import Flex from '@/components/common/Flex';
import * as Styled from '@/components/common/Logo/style';

export interface LogoProps {
  type?: 'textLogo' | 'logo';
  imageWidth?: number;
  imageHeight?: number;
}

const Logo = (props: LogoProps) => {
  const { type = 'textLogo', imageWidth = 54, imageHeight = 54 } = props;

  return (
    <Flex align="center" gap={0.8}>
      <Image src={'/assets/icons/ic_tily.svg'} alt="Logo" width={imageWidth} height={imageHeight} />
      {type === 'textLogo' && <Styled.Text imageWidth={imageWidth}>TIL-y</Styled.Text>}
    </Flex>
  );
};

export default Logo;
