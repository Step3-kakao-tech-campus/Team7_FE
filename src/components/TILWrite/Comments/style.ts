import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding-top: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  flex-shrink: 0;
  padding: 1rem 1rem 0 1rem;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

export const CommentContainer = styled.div`
  flex: 1;
  overflow-y: scroll;

  padding: 0 1rem;

  & > div:last-child {
    margin-bottom: 2rem;
  }
`;

// TILView

export const TILViewRoot = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EmptyRoot = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 1.25rem;
  width: 100%;
  margin: auto 0;

  @media ${({ theme }) => theme.mediaQuery.xs} {
    & > h3 {
      font-size: 16px;
    }
  }
`;
