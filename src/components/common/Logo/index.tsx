import Image from 'next/image';
import * as Styled from '@/components/common/Logo/style';

export interface LogoProps {
  type?: 'textLogo' | 'logo';
  imageSize?: number;
  onClick?: () => void;
  isPointer?: boolean;
}

const Logo = (props: LogoProps) => {
  const { type = 'textLogo', imageSize = 54, onClick, isPointer = false } = props;

  return (
    <Styled.Root onClick={onClick} isPointer={isPointer}>
      <Image src={'/assets/icons/tily.svg'} alt="Logo" width={imageSize + 3} height={imageSize} />
      {type === 'textLogo' && <Styled.Text imageSize={imageSize}>TIL-y</Styled.Text>}
    </Styled.Root>
  );
};

export default Logo;
