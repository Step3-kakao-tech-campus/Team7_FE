import Checkbox from '@/components/roadmap/manage/TIL/SearchSection/Checkbox';
import SearchBar from '@/components/roadmap/manage/TIL/SearchSection/SearchBar';
import StepSelect from '@/components/roadmap/manage/TIL/SearchSection/StepSelect';
import SubmitSelect from '@/components/roadmap/manage/TIL/SearchSection/SubmitSelect';
import * as Styled from './style';

const SearchSection = () => {
  return (
    <Styled.SearchSection>
      <Styled.MainSearchContainer>
        <StepSelect />
        <SubmitSelect />
        <SearchBar />
      </Styled.MainSearchContainer>

      <Styled.Container>
        <Styled.TILCount>총 16개</Styled.TILCount>
        <Checkbox />
      </Styled.Container>
    </Styled.SearchSection>
  );
};

export default SearchSection;
