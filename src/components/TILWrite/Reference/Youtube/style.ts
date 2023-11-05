import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled.div`
  margin-bottom: 2rem;
`;

export const ReferenceContainer = styled.button`
  display: flex;
  gap: 0.375rem;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const YoutubeContariner = styled(motion.div)<{ isOpen: boolean }>`
  margin-top: 0.5rem;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const Youtube = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
