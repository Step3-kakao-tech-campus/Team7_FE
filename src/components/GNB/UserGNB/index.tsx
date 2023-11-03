import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import TILModal from '@/components/GNB/UserGNB/desktop/TILModal';
import MobileTILModal from '@/components/GNB/UserGNB/mobile/MobileTILModal';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Responsive from '@/components/common/Responsive';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';
import GNBLogo from '../common/GNBLogo';
import GNBNav from '../common/GNBNav';
import GNBProfile from '../common/GNBProfile';

const GNB = () => {
  useGetRoadmapsMy();

  const { isOpen: isTilModalOpen, handleOpen: handleOpenTilModal, handleClose: handleCloseTilModal } = useModalState();

  return (
    <>
      <Styled.Root>
        <Styled.Inner>
          <GNBLogo />
          <GNBNav />
          <Flex>
            <Responsive device="desktop">
              <Styled.TILInfo>
                <span>오늘의 TIL를 작성하고 </span>
                <span>장미</span>
                <span>를 심어보세요</span>
              </Styled.TILInfo>
            </Responsive>

            <Button onClick={handleOpenTilModal} css={Styled.TILButtonStyles} variant="ghost">
              TIL
            </Button>

            <GNBProfile />
          </Flex>
        </Styled.Inner>
      </Styled.Root>

      <Styled.BellowRoot />

      <Responsive device="mobile">
        <MobileTILModal isOpen={isTilModalOpen} onClose={handleCloseTilModal} />
      </Responsive>
      <Responsive device="desktop">
        <TILModal isOpen={isTilModalOpen} onClose={handleCloseTilModal} />
      </Responsive>
    </>
  );
};

export default GNB;
