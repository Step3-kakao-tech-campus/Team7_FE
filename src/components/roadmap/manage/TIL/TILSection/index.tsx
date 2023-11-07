import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetStepTilsManage } from '@/api/hooks/til';
import TILCard from '@/components/Roadmap/manage/TIL/TILSection/TILCard';
import ConditionalRender from '@/components/common/ConditionalRender';
import * as Styled from './style';

const TILSection = () => {
  const router = useRouter();

  const { memberTils } = useGetStepTilsManage({ queryKey: [router.query] });

  return (
    <ConditionalRender data={memberTils} EmptyUI={<TILSection.Empty />}>
      <Styled.Root>{memberTils?.map((til) => <TILCard key={til.userId} {...til} />)}</Styled.Root>
    </ConditionalRender>
  );
};

export default TILSection;

TILSection.Empty = function Empty() {
  return (
    <Styled.EmptyRoot>
      <Styled.CardContainer>
        <Styled.ImageContainer>
          <Image src="/assets/icons/ic_peopleTILEmpty.svg" width={200} height={200} alt="다른 사람의 TIL이 없습니다." />
        </Styled.ImageContainer>

        <Styled.Description>
          <span>공개된 다른 TIL이 없습니다.</span>
        </Styled.Description>
      </Styled.CardContainer>
    </Styled.EmptyRoot>
  );
};
