import styled from '@emotion/styled';
import Header from '@/components/Roadmap/RoadmapCreate/Header';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { useRoeadmapCreate } from '@/hooks/useRoedmapCreate';
import { setLayout } from '@/utils/layout';
import Info from '../../../components/Roadmap/RoadmapCreate/Info';

export interface RoadmapInfo {
  name: string;
  description: string;
  isPublic: boolean;
}

const RoadmapCreate = () => {
  const { info, handleOnChange } = useRoeadmapCreate(infoDefault);

  return (
    <RoadmapCreatePage>
      <Header />
      <Info info={info} handleOnChange={handleOnChange} />
    </RoadmapCreatePage>
  );
};

setLayout(RoadmapCreate, HeaderLayout, true);

export default RoadmapCreate;

const RoadmapCreatePage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const infoDefault = { name: '', description: '', isPublic: true };
