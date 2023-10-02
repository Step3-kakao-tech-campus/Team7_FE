import { css } from '@emotion/react';
import type { Meta } from '@storybook/react';
import Flex from '@/components/common/Flex';
import Skeleton from '@/components/common/Skeleton';

export default {
  component: Skeleton,
} as Meta<typeof Skeleton>;

export const Card = {
  render: function Render() {
    return (
      <Flex dir="col" gap={0.4}>
        <Skeleton
          css={css`
            width: 200px;
            height: 150px;
          `}
        />
        <Skeleton
          css={css`
            width: 200px;
            height: 20px;
          `}
        />
        <Skeleton
          css={css`
            width: 200px;
            height: 20px;
          `}
        />
      </Flex>
    );
  },
};

export const Profile = {
  render: function Render() {
    return (
      <Flex dir="col" gap={0.4}>
        <Skeleton
          type="circle"
          css={css`
            width: 75px;
            height: 75px;
          `}
        />
        <Skeleton
          css={css`
            width: 200px;
            height: 20px;
          `}
        />
        <Skeleton
          css={css`
            width: 200px;
            height: 20px;
          `}
        />
      </Flex>
    );
  },
};
