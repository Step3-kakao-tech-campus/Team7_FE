import { useRef } from 'react';
import { useGetUsers, usePostUserProfileImage } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

interface ImageUploaderProps {
  imageUrl?: string;
  imgSize?: number;
}

const ImageUploader = (props: ImageUploaderProps) => {
  const { imageUrl, imgSize = 160 } = props;
  const { user } = useGetUsers();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { postUserProfileImageAsync } = usePostUserProfileImage();

  const handleClick = () => {
    const inputEl = inputRef.current;
    if (!inputEl) return;
    inputEl.value = '';
    inputEl.onchange = async () => {
      const formData = new FormData();
      [].forEach.call(inputEl.files, (image) => {
        formData.append('image', image);
      });
      await postUserProfileImageAsync({ param: { userId: user?.id as number }, body: formData });
    };
    inputEl.click();
  };
  return (
    <Styled.Root onClick={handleClick}>
      <Styled.ImageInput type="file" accept="image/*" ref={inputRef} />
      <Avatar imageUrl={imageUrl} alt="프로필 이미지" imageSize={imgSize} />
      <Styled.EditTag>Edit</Styled.EditTag>
    </Styled.Root>
  );
};

export default ImageUploader;
