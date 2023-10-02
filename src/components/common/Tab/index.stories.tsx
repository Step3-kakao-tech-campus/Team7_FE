import { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react';
import Tab from '@/components/common/Tab';

export default {
  component: Tab,
} as Meta<typeof Tab>;

export const Default = {
  render: function Render() {
    const [curTab, setCurTab] = useState('개인 TIL');

    useEffect(() => {
      console.log(`${curTab} API 호출`);
    }, [curTab]);

    return (
      <>
        <Tab>
          <Tab.Menu
            onClick={() => {
              setCurTab('개인 TIL');
            }}
            className={curTab === '개인 TIL' ? 'selected' : ''}>
            개인 TIL
          </Tab.Menu>
          <Tab.Menu
            onClick={() => {
              setCurTab('로드맵 TIL');
            }}
            className={curTab === '로드맵 TIL' ? 'selected' : ''}>
            로드맵 TIL
          </Tab.Menu>
        </Tab>
        <p>{curTab} API 호출</p>
      </>
    );
  },
};
