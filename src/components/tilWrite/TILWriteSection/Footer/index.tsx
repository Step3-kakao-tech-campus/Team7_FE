import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTils, usePatchTils } from '@/api/hooks/til';
import { useSubmitTils } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import { useToast } from '@/components/common/Toast/useToast';
import SubmitButton from '@/components/tilWrite/TILWriteSection/Footer/SubmitButton';
import SubmitModal from '@/components/tilWrite/TILWriteSection/Footer/SubmitModal';
import type { AutoSavedTime } from '@/components/tilWrite/TILWriteSection/useAutoSave';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface FooterProps {
  TILContent: string;
  autoSavedTime: AutoSavedTime;
}

const Footer = (props: FooterProps) => {
  const { TILContent, autoSavedTime } = props;

  const router = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { patchTilsAsync } = usePatchTils();
  const { submitTilsAsync } = useSubmitTils();
  const { tilDetail } = useGetTils({
    tilId: Number(router.query.tilId),
  });
  const toast = useToast();

  const handleSaveTIL = () => {
    if (!tilDetail) return;

    patchTilsAsync({
      tilId: Number(router.query.tilId),
      body: {
        content: TILContent,
      },
    });

    toast.showRight({ message: '저장되었습니다.' });
  };

  const handleSubmitTIL = () => {
    submitTilsAsync({
      param: {
        roadmapId: Number(router.query.roadmapId),
        tilId: Number(router.query.tilId),
      },
      body: {
        content: TILContent,
      },
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Styled.ExitContainer onClick={() => router.push(TILY_LINKS.home())}>
        <Image src={'/assets/icons/ic_arrowLeft.svg'} alt="Logo" width={20} height={20} />
        <Styled.Title>나가기</Styled.Title>
      </Styled.ExitContainer>

      <Styled.ActionButtonsContainer>
        {autoSavedTime.active && (
          <Styled.AutoSavedTime>
            <span>자동 저장 완료</span>
            <span>{dayjs(autoSavedTime.time).format('HH:mm:ss')}</span>
          </Styled.AutoSavedTime>
        )}
        <SubmitButton handleOpen={handleOpen} />
        <Button css={Styled.ButtonStyles} onClick={handleSaveTIL}>
          저장
        </Button>
      </Styled.ActionButtonsContainer>
      <SubmitModal isOpen={isOpen} handleClose={handleClose} handleSubmitTIL={handleSubmitTIL} />
    </Styled.Root>
  );
};

export default Footer;
