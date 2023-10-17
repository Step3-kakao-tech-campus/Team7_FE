import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';

export const Root = styled.section`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
`;

export const ImageContainer = styled.div`
  margin-top: 1.5rem;
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
