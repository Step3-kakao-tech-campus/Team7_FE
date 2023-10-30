import { useRouter } from 'next/router';
import { useGetStepTilsManage } from '@/api/hooks/til';
import Checkbox from '@/components/Roadmap/manage/TIL/SearchSection/Checkbox';
import SearchBar from '@/components/Roadmap/manage/TIL/SearchSection/SearchBar';
import StepSelect from '@/components/Roadmap/manage/TIL/SearchSection/StepSelect';
import SubmitSelect from '@/components/Roadmap/manage/TIL/SearchSection/SubmitSelect';
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
