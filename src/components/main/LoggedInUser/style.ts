import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';

export const Root = styled.div``;

export const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileSkeletonStyles = css`
  width: 240px;
  height: 240px;
`;

// 모바일

export const UserName = styled.div`
  display: flex;
  align-items: center;

  & > span:first-of-type {
    font-size: 20px;
    font-weight: 600;
  }

  & > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const LayoutElement = styled.div`
  width: 24px;
  height: 24px;
`;
