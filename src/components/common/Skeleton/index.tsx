import type { HTMLAttributes } from 'react';
import * as Styled from '@/components/common/Skeleton/style';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'box' | 'circle';
}

const Skeleton = (props: SkeletonProps) => {
  const { type = 'box', ...rest } = props;
  return (
    <Styled.Skeleton type={type} {...rest}>
      <Styled.Shimmer />
    </Styled.Skeleton>
  );
};

export default Skeleton;
