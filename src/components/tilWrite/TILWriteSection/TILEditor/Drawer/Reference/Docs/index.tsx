import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Styled from './style';

interface DocsProps {
  index: number;
  link: string;
}

const Docs = (props: DocsProps) => {
  const { link, index } = props;

  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={`/assets/icons/ic_reference.svg`} width={18} height={18} alt="참고자료" />
        <div>{`참고자료 ${index}`}</div>
      </Styled.ReferenceContainer>

      <button onClick={() => router.push(link)}>
        <Styled.OpenGraphContariner
          isOpen={isOpen}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          transition={{ type: 'tween' }}>
          <Styled.ReferenceLink href={link} target="_blank" rel="noreferrer">
            <span>{`${index}. ${link}`}</span>
          </Styled.ReferenceLink>
        </Styled.OpenGraphContariner>
      </button>
    </Styled.Root>
  );
};

export default Docs;
