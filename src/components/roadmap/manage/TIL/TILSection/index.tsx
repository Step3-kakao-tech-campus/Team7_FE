import { useRouter } from 'next/router';
import { useGetStepTilsManage } from '@/api/hooks/til';
import TILCard from '@/components/roadmap/manage/TIL/TILSection/TILCard';
import * as Styled from './style';

const TILSection = () => {
  const router = useRouter();

  const { memberTils } = useGetStepTilsManage({ queryKey: [router.query] });

  return <Styled.Root>{memberTils?.map((til) => <TILCard key={til.tilId} {...til} />)}</Styled.Root>;
};

export default TILSection;
