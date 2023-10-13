import { useState } from 'react';
import Icon from '@/components/common/Icon';
import * as Styled from './style';

const Youtube = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Root>
      <Styled.ReferenceContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Icon iconName="ic_reference" imageSize={18} ext="svg" alt="참고자료" />
        <div>영상자료</div>
      </Styled.ReferenceContainer>

      {/* iframe 생성할때 시간이 걸려서 display block none 으로 처리했습니다. 
      {isOpen && <iframe />} 요롷게 하면 iframe 을 새로 만들어서 딜레이가 걸려요. */}
      <Styled.YoutubeContariner isOpen={isOpen}>
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
