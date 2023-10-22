import styled from '@emotion/styled';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/roadmap/manage/SideBar';
import Table from '@/components/roadmap/manage/member/Table';
import { setLayout } from '@/utils/layout';

const Member = () => {
  return (
    <Root>
      <Container>
        <LeftArea>
          <SideBar />
        </LeftArea>

        <RightArea>
          <Header>구성원 관리</Header>
          <Table />
        </RightArea>
      </Container>
    </Root>
  );
};

setLayout(Member, HeaderLayout, true);

export default Member;

const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Container = styled.main`
  display: flex;
`;

const LeftArea = styled.aside`
  position: sticky;
  top: ${({ theme }) => theme.layout.main.GNBHeight};
  width: 200px;
  padding: 0.5rem;
  height: ${({ theme }) => `calc(100vh - ${theme.layout.main.GNBHeight})`};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

const RightArea = styled.main`
  padding: 2.5rem 6.25rem 5rem 6.25rem;
  flex: 1;
`;

const Header = styled.h1`
  margin-bottom: 1rem;
`;
