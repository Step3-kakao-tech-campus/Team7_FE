import { useRouter } from 'next/router';
import type { Til } from '@/api/til/type';
import { getTilWriteUrl } from '@/utils/getTilWriteUrl';
import * as Styled from './style';

interface TILProps {
  til: Til;
}

const TIL = (props: TILProps) => {
  const { til } = props;

  const router = useRouter();

  return (
    <Styled.Root onClick={() => router.push(getTilWriteUrl(til.roadmap.id, til.step.id, til.id))}>
      <Styled.Badge>{til.roadmap.name}</Styled.Badge>
      <Styled.Title>{til.step.title}</Styled.Title>
      <Styled.Date>{til.createDate}</Styled.Date>
    </Styled.Root>
  );
};

export default TIL;
