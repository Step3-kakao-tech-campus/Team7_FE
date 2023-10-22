import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import Portal from '@/components/common/Portal';
import Toast from '@/components/common/Toast';
import { useTimeout } from '@/components/common/Toast/useTimeout';
import * as Styled from './style';

export interface ToastOption {
  message: string;
  isError?: boolean;
}

export interface ToastController {
  show: (option: ToastOption) => void;
}

export const ToastContext = createContext<ToastController>({} as ToastController);

export interface ToastProviderProps {
  duration?: number;
}

const ToastProvider = (props: PropsWithChildren<ToastProviderProps>) => {
  const { duration = 2500, children } = props;

  const [toast, setToast] = useState<ToastOption | null>(null);
  const [animation, setAnimation] = useState<'slide-in' | 'slide-out' | 'slide-reset'>('slide-in');
  const toastTimeout = useTimeout();

  const controller: ToastController = {
    show: async ({ message, isError = false }: ToastOption) => {
      setToast({ message, isError });
      setAnimation('slide-reset');

      // 연속 클릭시 slide-reset이 실행된 후 slide-in이 실행되도록 함.
      await sleep(0);

      setAnimation('slide-in');
      toastTimeout.set(() => {
        setAnimation('slide-out');
      }, duration);
    },
  };

  return (
    <ToastContext.Provider value={controller}>
      {children}
      <Portal>
        <Styled.ToastContainer animation={animation}>
          {toast && <Toast message={toast.message} isError={toast.isError} />}
        </Styled.ToastContainer>
      </Portal>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
