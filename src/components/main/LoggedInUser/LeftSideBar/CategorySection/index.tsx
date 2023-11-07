import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import Collapsible from '@/components/main/LoggedInUser/LeftSideBar/CategorySection/Collapsible';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const CategorySection = () => {
  const { data } = useGetRoadmapsMy();
  const router = useRouter();

  const { addParamsToUrl } = useParamsToUrl();

  const handleSelectCategory = useCallback((id: number) => {
    const roadmapId = id.toString();
    addParamsToUrl({ roadmapId });
  }, []);

  return (
    <Styled.Root>
      <Styled.CategoryTitle>TIL 목록</Styled.CategoryTitle>
      <Styled.ShowAllButton onClick={() => router.push('/')}>목록 전체보기</Styled.ShowAllButton>
      <Styled.CollapsibleContainer data-testid="categorySection">
        <Collapsible>
          <Collapsible.Header>개인 TIL</Collapsible.Header>
          <Collapsible.Item>
            {data.category.map((item) => {
              return (
                <Styled.Item onClick={() => handleSelectCategory(item.id)} key={item.id}>
                  - {item.name}
                </Styled.Item>
              );
            })}
          </Collapsible.Item>
        </Collapsible>
        <Collapsible>
          <Collapsible.Header>로드맵 TIL</Collapsible.Header>
          <Collapsible.Item>
            {data.roadmaps.map((item) => {
              return (
                <Styled.Item onClick={() => handleSelectCategory(item.id)} key={item.id}>
                  - {item.name}
                </Styled.Item>
              );
            })}
          </Collapsible.Item>
        </Collapsible>
      </Styled.CollapsibleContainer>
    </Styled.Root>
  );
};

export default CategorySection;
