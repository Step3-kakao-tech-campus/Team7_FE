import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CustomContainer = styled.div<{ isTimeInclude: boolean }>`
  input {
    width: ${(props) => (props.isTimeInclude ? 'calc(16ch + 0.5rem)' : 'calc(9.5ch + 0.5rem)')};
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    padding: 0.4rem 0.25rem;
    line-height: 1;
  }
  input:disabled {
    color: ${({ theme }) => theme.colors.gray_400};
    background-color: ${({ theme }) => theme.colors.gray_100};
  }

  .react-datepicker {
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    background: #fff;
    box-shadow:
      0px 1px 3px 0px rgba(16, 24, 40, 0.1),
      0px 1px 2px -1px rgba(0, 0, 0, 0.1);
    font-size: 0.875em;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__header {
    background-color: #fff;
    border: none;
  }

  .react-datepicker__day-name {
    width: 1.9rem;
    line-height: 1.9rem;
    color: #71717a;
  }

  .react-datepicker__day {
    width: 1.9rem;
    line-height: 1.9rem;
  }

  .react-datepicker__day--outside-month {
    color: #a1a1aa;
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.black};
    color: #fff;
  }

  .react-datepicker__day--today {
    background-color: ${({ theme }) => theme.colors.gray_400};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    border-radius: 0.3rem;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.6rem;
`;

export const ButtonStyles = css`
  background-color: white;
  width: 2.25rem;
  height: 2.25rem;
`;
