import Image from 'next/image';
import styled from '@emotion/styled';

interface AvatarProps {
  iconName: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Avatar = (props: AvatarProps) => {
  const { iconName, imageWidth = 68, imageHeight = 68, ...rest } = props;

  return (
    <StyledAvatar src={`/assets/icons/${iconName}.svg`} alt="icon" width={imageWidth} height={imageHeight} {...rest} />
  );
};

export default Avatar;

const StyledAvatar = styled(Image)`
  align-self: center;
  border-radius: 50%;
  object-fit: cover;
`;
