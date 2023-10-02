import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';
import type { EmotionTheme } from '@/styles/emotion';

export const Root = styled.div``;

export const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
  padding: 2.5rem;
  height: 100vh;
`;
export const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 16.875em;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0.75rem 0.8rem;
  margin-top: 2.125rem;
`;

export const InputStyles = (theme: EmotionTheme) => css`
  &::placeholder {
    color: ${theme.colors.gray_800};
  }
`;

export const CategoryTitle = styled.h3`
  width: fit-content;
  margin-top: 1.5rem;

  font-size: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.black};
`;

export const CollapsibleContainer = styled.div`
  & > button {
    margin-top: 1.5rem;
  }
`;

export const ShowAllButton = styled.button`
  width: 16rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;

  margin-top: 1.5rem;
`;

export const RightArea = styled.div``;
