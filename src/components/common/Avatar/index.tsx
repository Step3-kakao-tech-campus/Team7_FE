import * as Styled from './style';

interface AvatarProps {
  iconName: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Avatar = (props: AvatarProps) => {
  const { iconName, imageWidth = 68, imageHeight = 68, ...rest } = props;

  return (
    <Styled.Avatar src={`/assets/icons/${iconName}.svg`} alt="icon" width={imageWidth} height={imageHeight} {...rest} />
  );
};

export default Avatar;
