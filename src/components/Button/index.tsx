import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = () => {
  return <ExButton>Button</ExButton>;
};

export default Button;

const ExButton = styled.button`
  color: red;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`;
