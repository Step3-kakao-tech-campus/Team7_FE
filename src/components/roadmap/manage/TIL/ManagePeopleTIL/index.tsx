import Checkbox from '@/components/roadmap/manage/TIL/Checkbox';
import SearchBar from '@/components/roadmap/manage/TIL/SearchBar';
import StepSelect from '@/components/roadmap/manage/TIL/StepSelect';
import SubmitSelect from '@/components/roadmap/manage/TIL/SubmitSelect';
import TILSection from '@/components/roadmap/manage/TIL/TILSection';
import * as Styled from './style';

const ManagePeopleTIL = () => {
  return (
    <main>
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

      <TILSection />
    </main>
  );
};

export default ManagePeopleTIL;
