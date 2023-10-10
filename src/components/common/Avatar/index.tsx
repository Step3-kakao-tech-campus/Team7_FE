import * as Styled from './style';

interface AvatarProps {
  iconName: string;
  imageSize?: number;
}

const Avatar = (props: AvatarProps) => {
  const { iconName, imageSize = 68, ...rest } = props;

  return (
    <Styled.Avatar src={`/assets/icons/${iconName}.svg`} alt="icon" width={imageSize} height={imageSize} {...rest} />
  );
};

export default Avatar;
