import { memo } from 'react';
import { useRouter } from 'next/router';
import { useGetTils } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import ExtensionIcon from '@/components/tilWrite/TILWriteSection/Header/ExtensionIcon';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface HeaderProps {
  TILContent: string;
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { TILContent, handleOpenCommentAside } = props;

  const router = useRouter();
  const { isOpen, handleClose, handleOpen } = useModalState();

  const { tilDetail } = useGetTils({
    tilId: Number(router.query.tilId),
  });

  return (
    <Styled.Root>
      <button onClick={() => router.push(TILY_LINKS.home())}>
        <Logo type="logo" imageSize={32} />
      </button>
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.IconContainer>
        <ExtensionIcon TILContent={TILContent} handleModalOpen={handleOpen} isOpen={isOpen} handleClose={handleClose} />

        {!tilDetail?.isPersonal && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_commentBlack" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.IconContainer>
    </Styled.Root>
  );
};

export default memo(Header);
