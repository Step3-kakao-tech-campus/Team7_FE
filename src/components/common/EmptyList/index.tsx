import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import * as Styled from '@/components/common/EmptyList/style';
import Flex from '@/components/common/Flex';

interface EmptyListProps extends PropsWithChildren {
  button?: string;
  image?: string;
  onClick?: () => void;
  imageWidth?: number;
  imageHeight?: number;
}

const EmptyList = (props: EmptyListProps) => {
  const { children, button, image, onClick, imageWidth = 60, imageHeight = 60 } = props;
  return (
    <Styled.EmptyRoot>
      {image && (
        <Image
          src={`/assets/icons/${image}.svg`}
          alt="참여중인 로드맵이 없음"
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <Flex dir="col" gap={0.3}>
        {children}
      </Flex>
      {button && onClick && <Button onClick={() => onClick()}>{button}</Button>}
    </Styled.EmptyRoot>
  );
};

export default EmptyList;
