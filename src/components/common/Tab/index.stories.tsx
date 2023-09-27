import type { Meta } from '@storybook/react';
import Tab from '@/components/common/Tab';

export default {
  component: Tab,
  title: 'Tab',
} as Meta<typeof Tab>;

export const Default = {
  args: {
    children: (
      <>
        <Tab.Menu className="selected">개인 TIL</Tab.Menu>
        <Tab.Menu>로드맵 TIL</Tab.Menu>
      </>
    ),
  },
};

export const ThreeOption = {
  args: {
    children: (
      <>
        <Tab.Menu>옵션 1</Tab.Menu>
        <Tab.Menu className="selected">옵션 2</Tab.Menu>
        <Tab.Menu>옵션 3</Tab.Menu>
      </>
    ),
  },
};
