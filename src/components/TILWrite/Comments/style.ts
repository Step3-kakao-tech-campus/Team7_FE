import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const HeaderContainer = styled.div`
  flex-shrink: 0;
  padding: 1rem 1rem 0 1rem;
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
