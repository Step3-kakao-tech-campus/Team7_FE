import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  gap: 3rem;
  width: 100%;
  padding: 3rem 2rem 2rem 2rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

export const LeftCardStyles = css`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 2rem 0 2rem 2rem;
  background-image: url('/assets/icons/ic_stair.svg');
  background-position: calc(100% - 50px) center;
  background-repeat: no-repeat;
`;

export const RightCardStyles = css`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 2rem 0 2rem 2rem;
  background-image: url('/assets/icons/ic_think.svg');
  background-position: calc(100% - 30px) center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  max-width: 360px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.5;
`;

export const ButtonStyles = css`
  font-size: 1rem;
  font-weight: 700;
`;
