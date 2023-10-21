import { useRouter } from 'next/router';
import { useGetStepTilsManage } from '@/api/hooks/til';
import Checkbox from '@/components/roadmap/manage/TIL/SearchSection/Checkbox';
import SearchBar from '@/components/roadmap/manage/TIL/SearchSection/SearchBar';
import StepSelect from '@/components/roadmap/manage/TIL/SearchSection/StepSelect';
import SubmitSelect from '@/components/roadmap/manage/TIL/SearchSection/SubmitSelect';
import * as Styled from './style';

const SearchSection = () => {
  const router = useRouter();

  const { memberTils } = useGetStepTilsManage({ queryKey: [router.query] });

  return (
    <Styled.SearchSection>
      <Styled.MainSearchContainer>
        <StepSelect />
        <SubmitSelect />
        <SearchBar />
      </Styled.MainSearchContainer>

      <Styled.Container>
        <Styled.TILCount>총 {memberTils?.length}개</Styled.TILCount>
        <Checkbox />
      </Styled.Container>
    </Styled.SearchSection>
  );
};

export default SearchSection;
