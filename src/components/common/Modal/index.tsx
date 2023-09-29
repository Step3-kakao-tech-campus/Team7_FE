import FocusTrap from 'focus-trap-react';
import { type PropsWithChildren, type HTMLAttributes, useRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import Image from 'next/image';
import Portal from '@/components/common/Portal';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  isOpen?: boolean;
  onClose: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { children, width, isOpen, onClose, ...rest } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    onClose();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Styled.Background>
        <FocusTrap>
          <RemoveScroll>
            <Styled.Container role="dialog" ref={modalRef} width={width} {...rest}>
              <Styled.CloseButton onClick={onClose}>
                <Image src="/assets/icons/ic_closeButton.svg" alt="close" width={24} height={24} />
              </Styled.CloseButton>
              <Styled.Content>{children}</Styled.Content>
            </Styled.Container>
          </RemoveScroll>
        </FocusTrap>
      </Styled.Background>
    </Portal>
  );
};

export default Modal;
