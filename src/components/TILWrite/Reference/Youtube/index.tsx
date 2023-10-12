import { useState } from 'react';
import Image from 'next/image';
import * as Styled from './style';

const Youtube = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={`/assets/icons/ic_reference.svg`} width={18} height={18} alt="참고자료" />
        <div>영상자료</div>
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
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/kWUsI7LCSmY?si=59XO3fvZ_pwxMDs3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Styled.YoutubeContariner>
    </Styled.Root>
  );
};

export default Youtube;
