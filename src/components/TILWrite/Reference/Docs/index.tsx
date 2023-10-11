import { useState } from 'react';
import OpenGraph from '@/components/TILWrite/Reference/OpenGraph';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

const Docs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Icon iconName="ic_reference" imageSize={18} ext="svg" alt="참고자료" />
        <div>참고자료</div>
      </Styled.ReferenceContainer>

      <Styled.OpenGraphContariner isOpen={isOpen}>
        <OpenGraph url="https://developer.mozilla.org/en-US/docs/Web/CSS/position" />
      </Styled.OpenGraphContariner>
    </Styled.Root>
  );
};

export default Docs;
