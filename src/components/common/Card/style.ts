import styled from '@emotion/styled';

export const Card = styled.div`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-7px);
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.13);
  }
`;
