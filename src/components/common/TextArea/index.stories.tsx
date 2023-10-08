import type { Meta } from '@storybook/react';
import TextArea from '@/components/common/TextArea/index';

export default {
  component: TextArea,
} as Meta<typeof TextArea>;

export const Default = {
  args: {
    label: '로드맵 설명',
    placeholder: '설명을 입력해주세요.',
    rows: 10,
  },
};

export const Comment = {
  args: {
    placeholder: '댓글을 입력해주세요.',
    rows: 3,
  },
};
