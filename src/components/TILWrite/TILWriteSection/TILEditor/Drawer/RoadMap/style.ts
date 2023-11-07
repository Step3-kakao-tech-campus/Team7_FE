import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StepList = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 0 1rem 0 0;
`;
