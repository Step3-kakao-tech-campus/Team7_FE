import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  background-color: #fff;

  @media ${({ theme }) => theme.mediaQuery.md} {
    top: 58px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 16px 16px 0 16px;
  background-color: white;
  border-bottom: ${({ theme }) => theme.colors.gray_500} 1px solid;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 16px;
  }
`;

export const RoadMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;

  & > button:hover {
    scale: 1.3;
    transition: all 0.2s;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

export const RoadMap = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
`;

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const ProgressSkeletonRoot = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ProgressRateStyle = css`
  width: 70%;
  height: 0.875rem;
`;

export const ProgressBarStyle = css`
  width: 100%;
  height: 8px;
  margin-top: 0.75rem;
`;

export const RoadmapTitleStyle = (theme: EmotionTheme) => css`
  max-width: 410px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${theme.mediaQuery.xs} {
    max-width: 90vw;
  }
`;

export const RoadmapEdit = styled(Flex)`
  padding: 2px 8px;
  background-color: #088906;
  border-radius: 8px;
  color: white;

  & > span {
    font-size: 12px;
    font-weight: 600;
  }

  &:hover {
    color: black;
    transition: all 0.2s ease;
  }
`;
