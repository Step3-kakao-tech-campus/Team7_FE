import { useState } from 'react';
import { forwardRef } from 'react';
import { useGetRoadmapsMy } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Responsive from '@/components/common/Responsive';
import TILModal from '@/components/gnb/UserGNB/desktop/TILModal';
import MobileTILModal from '@/components/gnb/UserGNB/mobile/MobileTILModal';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';
import GNBLogo from '../common/GNBLogo';
import GNBNav from '../common/GNBNav';
import GNBProfile from '../common/GNBProfile';
import Flower from '../common/flower';

interface GNBProps {}

const GNB = forwardRef<HTMLDivElement, GNBProps>((_, ref) => {
  useGetRoadmapsMy();

  const [isButton, setIsButton] = useState(true);
  const [isFlower, setIsFlower] = useState(false);

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

            <Responsive device="mobile">
              <Button onClick={handleOpenTilModal} css={Styled.TILButtonStyles} variant="ghost">
                TIL
              </Button>
            </Responsive>
            <Responsive device="desktop">
              <Styled.RefContainer ref={ref}>
                {isButton && (
                  <Button
                    onMouseEnter={() => {
                      setIsButton(false);
                      setIsFlower(true);
                    }}
                    onClick={handleOpenTilModal}
                    css={Styled.TILButtonStyles}
                    variant="ghost">
                    TIL
                  </Button>
                )}

                {isFlower && (
                  <Flower
                    onMouseLeave={() => {
                      setIsButton(true);
                      setIsFlower(false);
                    }}
                    onClick={handleOpenTilModal}
                  />
                )}
              </Styled.RefContainer>
            </Responsive>

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
});

export default GNB;
