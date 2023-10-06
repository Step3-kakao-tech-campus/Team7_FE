import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Info = styled(Flex)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_800};
`;
export const InfoText = styled.p`
  text-align: center;
`;

export const ButtonContainer = styled(Flex)``;

export const LoginButton = styled(Button)`
  border-radius: 10px;
`;
export const TryButton = styled(Button)``;
