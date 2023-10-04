import Collapsible from '@/components/main/Collapsible';
import * as Styled from './style';

const CategorySection = () => {
  return (
    <>
      <Styled.CategoryTitle>TIL 목록</Styled.CategoryTitle>
      <Styled.ShowAllButton>목록 전체보기</Styled.ShowAllButton>
      <Styled.CollapsibleContainer>
        <Collapsible>
          <Collapsible.Header>개인 TIL</Collapsible.Header>
          <Collapsible.Item>
            <div>- 자바 로드맵</div>
            <div>- 리액트 로드맵</div>
            <div>- JavaScript 입문 로드맵</div>
          </Collapsible.Item>
        </Collapsible>
        <Collapsible>
          <Collapsible.Header>로드맵 TIL</Collapsible.Header>
          <Collapsible.Item>
            <div>- 자바 로드맵</div>
            <div>- 리액트 로드맵</div>
            <div>- JavaScript 입문 로드맵</div>
            <div>- 자바 로드맵</div>
            <div>- 리액트 로드맵</div>
            <div>- JavaScript 입문 로드맵</div>
          </Collapsible.Item>
        </Collapsible>
      </Styled.CollapsibleContainer>
    </>
  );
};

export default CategorySection;
