import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled.section`
  width: 100%;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 48px;
  column-gap: 32px;
`;

// PeopleTILSection.Empty
export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;
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
`;

export const ButtonStyles = css`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

// PeopleTILSection.Skeleton
export const SkeletonCardStyles = css`
  width: 20rem;
  height: 11rem;
`;

// PeopleTILSection.Fallback

export const FallbackContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 420px;
`;
