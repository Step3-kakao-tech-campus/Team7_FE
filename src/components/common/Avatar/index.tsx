import * as Styled from './style';

interface AvatarProps {
  iconName?: string;
  imageUrl?: string;
  imageSize?: number;
  alt: string;
}

const Avatar = (props: AvatarProps) => {
  const { iconName, imageSize = 68, alt = 'icon', imageUrl, ...rest } = props;

  return (
    <>
      {imageUrl ? (
        <Styled.Avatar
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`}
          alt={alt}
          width={imageSize}
          height={imageSize}
          {...rest}
        />
      ) : (
        <Styled.Avatar
          src={iconName ? `/assets/icons/${iconName}.svg` : `/assets/icons/ic_profile.svg`}
          alt={alt}
          width={imageSize}
          height={imageSize}
          {...rest}
        />
      )}
    </>
  );
};

export default Avatar;
