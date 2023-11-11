import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapSteps } from '@/api/hooks/roadmap';
import { useGetStepTilsManage } from '@/api/hooks/til';
import Checkbox from '@/components/roadmap/manage/til/SearchSection/Checkbox';
import SearchBar from '@/components/roadmap/manage/til/SearchSection/SearchBar';
import StepSelect from '@/components/roadmap/manage/til/SearchSection/StepSelect';
import SubmitSelect from '@/components/roadmap/manage/til/SearchSection/SubmitSelect';
import * as Styled from './style';

const SearchSection = () => {
  const router = useRouter();

  const { steps } = useGetRoadmapSteps(Number(router.query.roadmapId));

  const { memberTils } = useGetStepTilsManage({ queryKey: [router.query] });

  useEffect(() => {
    // 초기 useEffect에서 steps가 undefined일 경우 return
    if (!steps || !router.isReady || steps.result.steps.length === 0) {
      return;
    }
  }, [steps]);

  return (
    <Styled.SearchSection>
      <Styled.MainSearchContainer>
        <StepSelect />
        <SubmitSelect />
        <SearchBar />
      </Styled.MainSearchContainer>

      <Styled.Container>
        <Styled.TILCount>총 {memberTils?.length || '0'}개</Styled.TILCount>
        <Checkbox />
      </Styled.Container>
    </Styled.SearchSection>
  );
};

export default SearchSection;
