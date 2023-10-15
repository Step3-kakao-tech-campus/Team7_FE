import { useState } from 'react';
import Image from 'next/image';
import OpenGraph from '@/components/TILWrite/Reference/OpenGraph';
import * as Styled from './style';

const Docs = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={`/assets/icons/ic_reference.svg`} width={18} height={18} alt="참고자료" />
        <div>참고자료</div>
      </Styled.ReferenceContainer>

      <Styled.OpenGraphContariner
        isOpen={isOpen}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ type: 'tween' }}>
        <OpenGraph url="https://developer.mozilla.org/en-US/docs/Web/CSS/position" />
      </Styled.OpenGraphContariner>
    </Styled.Root>
  );
};

export default Docs;
