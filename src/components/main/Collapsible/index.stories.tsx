import { useState } from 'react';
import type { Meta } from '@storybook/react';
import Collapsible from '@/components/main/Collapsible';

export default {
  component: Collapsible,
} as Meta<typeof Collapsible>;

export const Default = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleContent = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <>
      <Collapsible>
        <Collapsible.Header isActive={isActive} onClick={toggleContent}>
          개인 TIL
        </Collapsible.Header>
        <Collapsible.Item isActive={isActive}>
          <div>- 자바 로드맵</div>
          <div>- 리액트 로드맵</div>
          <div>- JavaScript 입문 로드맵</div>
        </Collapsible.Item>
      </Collapsible>
    </>
  );
};
