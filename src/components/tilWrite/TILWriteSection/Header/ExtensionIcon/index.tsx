import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetTils } from '@/api/hooks/til';
import { useToast } from '@/components/common/Toast/useToast';
import ExtensionInfoModal from '@/components/tilWrite/TILWriteSection/Header/ExtensionInfoModal';
import { useChromeExtension } from '@/components/tilWrite/TILWriteSection/Header/useChromeExtension';

interface ExtensionIconProps {
  isOpen: boolean;
  TILContent: string;
  handleModalOpen: () => void;
  handleClose: () => void;
}
const ExtensionIcon = (props: ExtensionIconProps) => {
  const { isOpen, TILContent, handleModalOpen, handleClose } = props;

  const router = useRouter();
  const toast = useToast();
  useChromeExtension();

  const { tilDetail } = useGetTils({
    tilId: Number(router.query.tilId),
  });

  const handleSubmitTILContentToGithub = useCallback(() => {
    if (!TILContent) {
      toast.showBottom({
        message: 'TIL을 작성해주세요.',
        isError: true,
      });
      return;
    }

    // 익스텐션으로 보낼 데이터 객체
    const detail = {
      isPersonal: tilDetail?.isPersonal,
      roadmapTitle: tilDetail?.roadmapName,
      stepTitle: tilDetail?.step.title,
      content: TILContent,
    };
    const event = new CustomEvent('크롬익스텐션이벤트', { detail });
    document.dispatchEvent(event);
  }, [tilDetail, TILContent]);

  return (
    <>
      <button id="github_extenstion" onClick={handleModalOpen}>
        <Image src="/assets/icons/ic_github.svg" width={60} height={60} alt="깃허브 익스텐션" />
      </button>
      <ExtensionInfoModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleSubmitTILContentToGithub={handleSubmitTILContentToGithub}
      />
    </>
  );
};

export default ExtensionIcon;
