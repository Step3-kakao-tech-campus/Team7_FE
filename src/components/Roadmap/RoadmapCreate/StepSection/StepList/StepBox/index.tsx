import dayjs from 'dayjs';
import { useState } from 'react';
import Image from 'next/image';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/style';
import type { Step } from '@/pages/roadmap/create';

interface StepBoxProps {
  step: Step;
}

const StepBox = (props: StepBoxProps) => {
  const { step } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Styled.StepContainer>
      <Styled.Header>
        <Styled.TitleContainer>
          <Image
            src={`/assets/icons/ic_chevron${isOpen ? 'Up' : 'Down'}Black.svg`}
            alt={`${isOpen ? '위' : '아래'} 화살표`}
            width={15}
            height={15}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
          <h3>{step.title}</h3>
        </Styled.TitleContainer>
        <Styled.ButtonContainer>
          <b>제출기한</b>
          <p>{dayjs(step.date).format('YYYY-MM-DD | HH:mm')}</p>
          <Image src="/assets/icons/ic_edit.svg" alt="아래 화살표" width={25} height={25} />
          <Image src="/assets/icons/ic_trash.svg" alt="아래 화살표" width={25} height={25} />
        </Styled.ButtonContainer>
      </Styled.Header>
      {isOpen && (
        <Styled.ContentContainer>
          <p>{step.description}</p>
        </Styled.ContentContainer>
      )}
    </Styled.StepContainer>
  );
};

export default StepBox;
