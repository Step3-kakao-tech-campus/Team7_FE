import { memo } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useGetTil } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import ExtensionInfoModal from '@/components/tilWrite/TILWriteSection/Header/ExtensionInfoModal';
import SideBar from '@/components/tilWrite/TILWriteSection/mobile/MobileHeader/SideBar';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface MobileHeaderProps {
  autoSavedTimeHandler: {
    activeAutoSave: () => void;
    clearAutoSave: () => void;
  };
}

const MobileHeader = (props: MobileHeaderProps) => {
  const { autoSavedTimeHandler } = props;

  const router = useRouter();
  const { isOpen, handleClose } = useModalState();

  const { tilDetail } = useGetTil({
    tilId: Number(router.query.tilId),
  });

  return (
    <Styled.Root>
      <Icon
        iconName="ic_arrowLeft"
        imageSize={24}
        ext="svg"
        alt="뒤로가기"
        onClick={() => router.push(TILY_LINKS.home())}
      />
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.Container>
        <SideBar autoSavedTimeHandler={autoSavedTimeHandler}>
          <Icon iconName="ic_hamburger" imageSize={24} ext="svg" alt="사이드바 아이콘" />
        </SideBar>
      </Styled.Container>

      <ExtensionInfoModal isOpen={isOpen} handleClose={handleClose} />
    </Styled.Root>
  );
};

export default memo(MobileHeader);

export const Root = styled.header`
  display: flex;
  align-items: center;

  padding: 0 1.5rem;

  background-color: ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  height: ${({ theme }) => theme.layout.tilWrite.headerHeight};
`;

export const Title = styled.h1`
  flex: 1;
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.3rem;

  & > .swing {
    animation: swing 2s infinite linear;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
