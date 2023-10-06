import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

export const CodeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReSendButton = styled(Button)`
  align-self: flex-end;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_800};
  transition: all 0.1s;

  &:hover {
    color: #5d5d5d;
  }
`;
