import { useRouter } from 'next/router';
import { useGetStepTilsManage } from '@/api/hooks/til';
import ConditionalRender from '@/components/common/ConditionalRender';
import EmptyList from '@/components/common/EmptyList';
import TILCard from '@/components/roadmap/manage/til/TILSection/TILCard';
import * as Styled from './style';

const TILSection = () => {
  const router = useRouter();

  const { memberTils } = useGetStepTilsManage({ queryKey: [router.query] });

  return (
    <ConditionalRender
      data={memberTils}
      EmptyUI={
        <EmptyList image="ic_peopleTILEmpty" imageWidth={200} imageHeight={100}>
          <p>공개된 다른 TIL이 없습니다.</p>
        </EmptyList>
      }>
      <Styled.Root>{memberTils?.map((til) => <TILCard key={til.userId} {...til} />)}</Styled.Root>
    </ConditionalRender>
  );
};

export default TILSection;
