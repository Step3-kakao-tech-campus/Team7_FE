import { useRouter } from 'next/router';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import Collapsible from '@/components/main/Collapsible';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const CategorySection = () => {
  const { data } = useGetRoadmapsMy();
  const router = useRouter();

  const { addParamsToUrl } = useParamsToUrl();

  const handleSelectCategory = (id: number) => {
    const roadmapId = id.toString();
    addParamsToUrl({ roadmapId });
  };

  return (
    <>
      <Styled.CategoryTitle>TIL 목록</Styled.CategoryTitle>
      <Styled.ShowAllButton onClick={() => router.push('/')}>목록 전체보기</Styled.ShowAllButton>
      <Styled.CollapsibleContainer>
        <Collapsible>
          <Collapsible.Header>개인 TIL</Collapsible.Header>
          <Collapsible.Item>
            {data.category.map((item, index) => {
              return (
                <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
                  - {item.name}
                </Styled.Item>
              );
            })}
          </Collapsible.Item>
        </Collapsible>
        <Collapsible>
          <Collapsible.Header>로드맵 TIL</Collapsible.Header>
          <Collapsible.Item>
            {data.roadmaps.map((item, index) => {
              return (
                <Styled.Item onClick={() => handleSelectCategory(item.id)} key={index}>
                  - {item.name}
                </Styled.Item>
              );
            })}
          </Collapsible.Item>
        </Collapsible>
      </Styled.CollapsibleContainer>
    </>
  );
};

export default CategorySection;
