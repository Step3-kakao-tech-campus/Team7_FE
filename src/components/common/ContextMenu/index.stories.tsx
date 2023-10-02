import type { Meta } from '@storybook/react';
import ContextMenu from '@/components/common/ContextMenu';

export default {
  component: ContextMenu,
} as Meta<typeof ContextMenu>;

export const Default = {
  args: {
    children: (
      <>
        <ContextMenu.Menu>수정하기</ContextMenu.Menu>
        <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
      </>
    ),
  },
};

export const OneOption = {
  args: {
    children: (
      <>
        <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
      </>
    ),
  },
};

export const ThreeOption = {
  args: {
    children: (
      <>
        <ContextMenu.Menu>정보보기</ContextMenu.Menu>
        <ContextMenu.Menu>수정하기</ContextMenu.Menu>
        <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
      </>
    ),
  },
};
