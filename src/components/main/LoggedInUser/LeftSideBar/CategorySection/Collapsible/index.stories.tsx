import type { Meta } from '@storybook/react';
import Collapsible from '@/components/main/LoggedInUser/LeftSideBar/CategorySection/Collapsible';

export default {
  component: Collapsible,
} as Meta<typeof Collapsible>;

export const Default = () => {
  return (
    <>
      <Collapsible>
        <Collapsible.Header>개인 TIL</Collapsible.Header>
        <Collapsible.Item>
          <div>- 자바 로드맵</div>
          <div>- 리액트 로드맵</div>
          <div>- JavaScript 입문 로드맵</div>
        </Collapsible.Item>
      </Collapsible>
    </>
  );
};
