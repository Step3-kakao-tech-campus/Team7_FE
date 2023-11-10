import { useRouter } from 'next/router';
import type { Til } from '@/api/type';
import TILY_LINKS from '@/constants/links';
import * as Styled from './style';

interface TILProps {
  til: Til;
}

const TIL = (props: TILProps) => {
  const { til } = props;

  const router = useRouter();

  return (
    <Styled.Root
      onClick={() =>
        router.push(TILY_LINKS.tilWrite({ roadmapId: til.roadmap.id, stepId: til.step.id, tilId: til.id }))
      }>
      <Styled.Badge category={til.roadmap.category}>{til.roadmap.name}</Styled.Badge>
      <Styled.Title>{til.step.title}</Styled.Title>
      <Styled.Date>{til.createDate}</Styled.Date>
    </Styled.Root>
  );
};

export default TIL;
