import Image from 'next/image';
import Flex from '@/components/common/Flex';
import * as Styled from '@/components/common/Logo/style';

export interface LogoProps {
  type?: 'textLogo' | 'logo';
  imageSize?: number;
}

const Logo = (props: LogoProps) => {
  const { type = 'textLogo', imageSize = 54 } = props;

  return (
    <Flex align="center" gap={0.8}>
      <Image src={'/assets/icons/ic_tily.svg'} alt="Logo" width={imageSize} height={imageSize} />
      {type === 'textLogo' && <Styled.Text imageSize={imageSize}>TIL-y</Styled.Text>}
    </Flex>
  );
};

export default Logo;
