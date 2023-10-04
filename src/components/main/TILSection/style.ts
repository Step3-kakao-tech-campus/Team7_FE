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

export const Target = styled.div`
  background-color: red;
  width: 100%;
  height: 40px;
`;
