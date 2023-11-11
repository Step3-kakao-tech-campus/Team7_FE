import DOMPurify from 'dompurify';
import { useState } from 'react';
import Image from 'next/image';
import * as Styled from './style';

interface YoutubeProps {
  index: number;
  link: string;
}

const Youtube = (props: YoutubeProps) => {
  const { link, index } = props;

  const [isOpen, setIsOpen] = useState(true);

  const cleanHTML = DOMPurify.sanitize(link);

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={`/assets/icons/ic_reference.svg`} width={18} height={18} alt="참고자료" />
        <div>{`영상자료 ${index}`}</div>
      </Styled.ReferenceContainer>

      <Styled.YoutubeContariner
        isOpen={isOpen}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ type: 'tween' }}>
        <Styled.Youtube dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      </Styled.YoutubeContariner>
    </Styled.Root>
  );
};

export default Youtube;
