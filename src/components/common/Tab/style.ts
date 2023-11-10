import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  padding: 0.25em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  color: #707070;
  text-align: center;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const Menu = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 32px;
  width: 50%;
  padding: 0.25em;
  border-radius: 3px;
  font-size: 16px;

  cursor: pointer;

  &.selected {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
    background-color: white;
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  & > img {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  &:hover > span {
    visibility: visible;
  }
`;

export const TooltipBox = styled.section`
  position: absolute;
  bottom: 160%;
  left: -20px;
  z-index: 99999;
  width: 270px;
  padding: 5px 10px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.rose_light};
  color: ${({ theme }) => theme.colors.gray_700};
  text-align: center;
  font-size: 14px;
  box-shadow: 2px 2px 4px 1px ${({ theme }) => theme.colors.gray_400};

  &::after {
    content: '';
    position: absolute;
    left: 13px;
    border-top: 20px solid ${({ theme }) => theme.colors.rose_light};
    border-left: 20px solid transparent;
  }
`;
