import Image from 'next/image';
import * as Styled from '@/components/common/Logo/style';

export interface LogoProps {
  type?: 'textLogo' | 'logo';
  imageSize?: number;
}

const Logo = (props: LogoProps) => {
  const { type = 'textLogo', imageSize = 54 } = props;

  return (
    <Styled.Root>
      <Image src={'/assets/icons/tily.png'} alt="Logo" width={imageSize + 3} height={imageSize} />
      {type === 'textLogo' && <Styled.Text imageSize={imageSize}>TIL-y</Styled.Text>}
    </Styled.Root>
  );
};

export default Logo;
