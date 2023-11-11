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
  cursor: pointer;
`;

export const OpenGraphContariner = styled(motion.div)<{ isOpen: boolean }>`
  margin-top: 0.5rem;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const ReferenceLink = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 5px;

  & > img {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    & section > p {
      font-size: 12px;
    }
  }
`;
