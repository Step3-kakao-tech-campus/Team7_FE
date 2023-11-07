import { useEffect, useState } from 'react';
import * as Styled from '@/components/Roadmap/RoadmapList/RecruitRoadmap/RecruitNav/style';
import Input from '@/components/common/Input';
import Responsive from '@/components/common/Responsive';
import Tab from '@/components/common/Tab';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import useQueryParam from '@/hooks/useQueryParam';

const RecruitNav = () => {
  const initialCategory = useQueryParam('category');
  const initialName = useQueryParam('name');

  const [category, setCategory] = useState<string>('');
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
    setCategory(initialCategory);
    setName(initialName);
  }, [setCategory, setName, initialCategory, initialName]);

  return (
    <Styled.Navbar>
      <Responsive device="desktop">
        <Tab>
          {tabMenu.map((menu) => (
            <Tab.Menu
              key={menu.name}
              onClick={() => {
                setCategory(menu.status);
                overlapParamsToUrl({ category: menu.status });
              }}
              className={category === menu.status ? 'selected' : ''}
              tooltipContent={() => (
                <>
                  <p>{menu.firstTip}</p>
                  <p>{menu.secondTip}</p>
                </>
              )}>
              {menu.name}
            </Tab.Menu>
          ))}
        </Tab>
      </Responsive>
      <Responsive device="mobile">
        <Tab>
          {tabMenu.map((menu) => (
            <Tab.Menu
              key={menu.name}
              onClick={() => {
                setCategory(menu.status);
                overlapParamsToUrl({ category: menu.status });
              }}
              className={category === menu.status ? 'selected' : ''}
              isTooltip={false}>
              {menu.name}
            </Tab.Menu>
          ))}
        </Tab>
      </Responsive>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Input
          css={Styled.SearchInput}
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
  );
};

export default RecruitNav;

const tabMenu = [
  {
    name: 'TIL-y 로드맵',
    status: 'tily',
    firstTip: '틸리에서 제공해주는 로드맵이에요.',
    secondTip: '다양한 로드맵들을 제공하려 노력중입니다.',
  },
  {
    name: '그룹 로드맵',
    status: 'group',
    firstTip: '사용자들이 직접 만든 로드맵이에요.',
    secondTip: '서로의 TIL을 확인해보세요.',
  },
] as const;
