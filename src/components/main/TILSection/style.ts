import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-left: 2.6rem;
  margin-top: 1.5rem;
`;

export const SkeletonStyles = css`
  width: 16.875rem;
  height: 9.375rem;

  padding: 1.25rem;
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 850px;
  height: 500px;
  margin-left: 2.5rem;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span:first-of-type {
    font-weight: 700;
    font-size: 1.375rem;
  }

  & > span:last-of-type {
    margin-top: 0.5rem;
    font-weight: 700;
    font-size: 1.375rem;
    margin-bottom: 5rem;
  }
`;

export const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 2.5rem;
`;
