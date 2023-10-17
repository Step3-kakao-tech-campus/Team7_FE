import { css } from '@emotion/react';
import styled from '@emotion/styled';
import GNB from '@/components/common/GNB';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { setLayout } from '@/utils/layout';
import * as Styled from './style';

const PeopleTil = () => {
  return (
    <>
      <GNB />
      <Root>
        <Inner>ddd</Inner>
      </Root>
    </>
  );
};

export default PeopleTil;

setLayout(PeopleTil, HeaderLayout, true);

const Root = styled.main``;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;
