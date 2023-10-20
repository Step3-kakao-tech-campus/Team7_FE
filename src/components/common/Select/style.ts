import { css } from '@emotion/react';
import styled from '@emotion/styled';
import IconButton from '@/components/common/IconButton';

export const SelectContainer = styled.div`
  width: 140px;
  box-shadow: none;
  position: relative;
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
    border: 1px solid ${theme.colors.gray_400};
    ${isOpen &&
    css`
      border-radius: 6px 6px 0 0;
    `}
  `}
`;

export const SelectMenu = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0.25rem 0.25rem;
  position: absolute;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 0 0 6px 6px;
`;

export const SelectOption = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 6px;
  text-align: left;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`;
