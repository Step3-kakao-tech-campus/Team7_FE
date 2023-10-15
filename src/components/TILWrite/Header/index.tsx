import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import { useSubmitTil } from '@/api/hooks/til';
import SubmitModal from '@/components/TILWrite/SubmitModal';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface HeaderProps {
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleOpenCommentAside } = props;

  const { query } = useRouter();

  const { isOpen, handleOpen, handleClose } = useModalState();
  const { tilDetail } = useGetTil({
    roadmapId: query.roadmapId as string,
    stepId: query.stepId as string,
    tilId: query.tilId as string,
  });
  const { submitTil } = useSubmitTil();

  const handleSubmit = () => {
    submitTil({
      roadmapId: query.roadmapId as string,
      stepId: query.stepId as string,
      tilId: query.tilId as string,
      title: 'title',
      content: 'content',
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Logo type="logo" imageSize={32} />
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.Container>
        <Button variant="primary" css={Styled.SubmitButtonStyles} onClick={handleOpen}>
          제출
        </Button>
        <Icon iconName="ic_github" imageSize={32} ext="svg" alt="깃허브 익스텐션" />
        {tilDetail?.isPersonal === false && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_comment" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.Container>

      <SubmitModal isOpen={isOpen} handleClose={handleClose} handleSubmit={handleSubmit} />
    </Styled.Root>
  );
};

export default Header;
