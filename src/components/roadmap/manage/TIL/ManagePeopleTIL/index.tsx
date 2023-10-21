import SearchSection from '@/components/roadmap/manage/TIL/SearchSection';
import TILSection from '@/components/roadmap/manage/TIL/TILSection';
import * as Styled from './style';

const ManagePeopleTIL = () => {
  return (
    <Styled.Root>
      <SearchSection />
      <TILSection />
    </Styled.Root>
  );
};

export default ManagePeopleTIL;
