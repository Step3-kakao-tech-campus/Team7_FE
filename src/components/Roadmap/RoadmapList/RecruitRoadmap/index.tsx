import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RecruitRoadmapList from '@/components/Roadmap/RoadmapList/RecruitRoadmap/RecruitRoadmapList';
import * as Styled from '@/components/Roadmap/RoadmapList/RecruitRoadmap/style';
import Input from '@/components/common/Input';
import Responsive from '@/components/common/Responsive';
import Tab from '@/components/common/Tab';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import useQueryParam from '@/hooks/useQueryParam';

const RecruitRoadmap = () => {
  const router = useRouter();
  const initialCategory = useQueryParam('category');
  const initialName = useQueryParam('name');

  const [category, setCategory] = useState<string | null>(null);
  const [name, setName] = useState<string>('');

  const { overlapParamsToUrl, deleteParamsFromUrl } = useParamsToUrl();

  const handleNameSearch = () => {
    if (name === '') {
      deleteParamsFromUrl('name');
    } else {
      overlapParamsToUrl({ name });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      setCategory(initialCategory || 'tily');
      setName(initialName || '');
    }
  }, [router]);

  useEffect(() => {
    if (!router.isReady) return;
    if (category) {
      overlapParamsToUrl({ category });
    }
  }, [category]);

  return (
    <Styled.Root>
      <h2>로드맵 목록</h2>
      <Styled.Navbar>
        <Responsive device="desktop">
          <Tab>
            <Tab.Menu
              css={Styled.TabMenuStyles}
              onClick={() => {
                setCategory('tily');
              }}
              className={category === 'tily' ? 'selected' : ''}
              tooltipContent={() => (
                <>
                  <p>틸리에서 제공해주는 로드맵이에요.</p>
                  <p>다양한 로드맵들을 제공하려 노력중입니다.</p>
                </>
              )}>
              TIL-y 로드맵
            </Tab.Menu>
            <Tab.Menu
              css={Styled.TabMenuStyles}
              onClick={() => {
                setCategory('group');
              }}
              className={category === 'group' ? 'selected' : ''}
              tooltipContent={() => (
                <>
                  <p>사용자들이 직접 만든 로드맵이에요.</p>
                  <p>서로의 TIL을 확인해보세요.</p>
                </>
              )}>
              그룹 로드맵
            </Tab.Menu>
          </Tab>
        </Responsive>
        <Responsive device="mobile">
          <Tab>
            <Tab.Menu
              onClick={() => {
                setCategory('tily');
              }}
              className={category === 'tily' ? 'selected' : ''}
              isTooltip={false}>
              TIL-y 로드맵
            </Tab.Menu>
            <Tab.Menu
              onClick={() => {
                setCategory('group');
              }}
              className={category === 'group' ? 'selected' : ''}
              isTooltip={false}>
              그룹 로드맵
            </Tab.Menu>
          </Tab>
        </Responsive>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <Input
            css={Styled.InputContainerStyles}
            placeholder="검색어를 입력하세요"
            endIcon="ic_search_2x"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onClick={handleNameSearch}
          />
        </form>
      </Styled.Navbar>
      <RecruitRoadmapList />
    </Styled.Root>
  );
};

export default RecruitRoadmap;
