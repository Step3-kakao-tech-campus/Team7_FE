import type { Til } from '@/api/til/type';
import * as Styled from './style';

interface TILProps {
  til: Til;
}

const TIL = (props: TILProps) => {
  const { til } = props;

  return (
    <Styled.Root>
      <Styled.Badge>{til.roadmap.name}</Styled.Badge>
      <Styled.Title>{til.step.title}</Styled.Title>
      <Styled.Date>{til.createDate}</Styled.Date>
    </Styled.Root>
  );
};

export default TIL;
