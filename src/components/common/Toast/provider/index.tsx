import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import Portal from '@/components/common/Portal';
import Toast from '@/components/common/Toast';
import { useTimeout } from '@/components/common/Toast/useTimeout';
import * as Styled from './style';

export interface ToastOption {
  message: string;
  isError?: boolean;
  position?: 'bottom' | 'right';
}

export interface ToastController {
  showBottom: (option: ToastOption) => void;
  showRight: (option: ToastOption) => void;
}

export const ToastContext = createContext<ToastController>({} as ToastController);

export interface ToastProviderProps {
  duration?: number;
}

const ToastProvider = (props: PropsWithChildren<ToastProviderProps>) => {
  const { duration = 2500, children } = props;

  const [toast, setToast] = useState<ToastOption | null>(null);
  const [animation, setAnimation] = useState<
    | 'slide-bottom-in'
    | 'slide-bottom-out'
    | 'slide-bottom-reset'
    | 'slide-right-in'
    | 'slide-right-out'
    | 'slide-right-reset'
  >('slide-bottom-in');
  const toastTimeout = useTimeout();

  const controller: ToastController = {
    showBottom: async ({ message, isError = false, position = 'bottom' }: ToastOption) => {
      setToast({ message, isError, position });
      setAnimation('slide-bottom-reset');

      // 연속 클릭시 slide-reset이 실행된 후 slide-in이 실행되도록 함.
      await sleep(0);

      setAnimation('slide-bottom-in');
      toastTimeout.set(() => {
        setAnimation('slide-bottom-out');
      }, duration);
    },

    showRight: async ({ message, isError = false, position = 'right' }: ToastOption) => {
      setToast({ message, isError, position });
      setAnimation('slide-right-reset');

      // 연속 클릭시 slide-reset이 실행된 후 slide-in이 실행되도록 함.
      await sleep(0);

      setAnimation('slide-right-in');
      toastTimeout.set(() => {
        setAnimation('slide-right-out');
      }, duration);
    },
  };

  return (
    <ToastContext.Provider value={controller}>
      {children}
      <Portal>
        <Styled.ToastContainer animation={animation} position={toast?.position}>
          {toast && <Toast message={toast.message} isError={toast.isError} position={toast?.position} />}
        </Styled.ToastContainer>
      </Portal>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
