import { c } from 'msw/lib/glossary-de6278a9';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HeaderLayout from '@/components/layout/HeaderLayout';
import SideBar from '@/components/manage/SideBar';
import { setLayout } from '@/utils/layout';
import * as Styled from './style';

const Member = () => {
  return (
    <Root>
      <Container>
        <LeftArea>
          <SideBar />
        </LeftArea>

        <RightArea>
          <Header>구성원 관리</Header>
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
  width: 200px;
  padding: 0.5rem;
  height: ${({ theme }) => `calc(100vh - ${theme.layout.main.GNBHeight})`};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
`;

const RightArea = styled.main`
  margin-left: 60px;
  flex: 1;
`;

const Header = styled.h1`
  margin-top: 2rem;
`;
