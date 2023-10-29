import { useRef } from 'react';
import Avatar from '@/components/common/Avatar';
import * as Styled from './style';

interface ImageUploaderProps {
  imageUrl?: string;
  imgSize?: number;
}

const ImageUploader = (props: ImageUploaderProps) => {
  const { imageUrl, imgSize = 160 } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    const inputEl = inputRef.current;
    if (!inputEl) return;
    inputEl.value = '';
    inputEl.onchange = async () => {
      // 이미지 업로드 처리 로직
    };
    inputEl.click();
  };
  return (
    <Styled.Root onClick={handleClick}>
      <Styled.ImageInput type="file" accept="image/*" ref={inputRef} />
      <Avatar imageUrl={imageUrl} alt="프로필 이미지" imageSize={imgSize} />
    </Styled.Root>
  );
};

export default ImageUploader;
