import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@/components/common/Card';
import IconButton from '@/components/common/IconButton';

export const SelectContainer = styled(Card)`
  width: 140px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

export const Select = styled(IconButton)<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem;
    background-color: white;
    color: ${theme.colors.black};
    font-weight: 700;
    ${isOpen &&
    css`
      border-radius: 6px 6px 0 0;
      border-bottom: 1px solid ${theme.colors.gray_400};
    `}
  `}
`;

export const SelectMenu = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0.25rem 0.5rem;
`;

export const SelectOption = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  border-radius: 6px;
  text-align: left;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`;
